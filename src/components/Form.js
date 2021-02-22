import React, { useEffect, useState } from 'react'
import Toppings from './Toppings'
import FormSchema from './FormSchema'
import { Route } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import styled from 'styled-components'

// Styling
const PizzaForm = styled.section`
    width:90%;
    margin: 2rem auto;
    text-align:center;
    h3 {
        color:red;
        font-size: 1.5rem;
    }
    form {
        display: flex;
        flex-flow: column nowrap;
        width:60%;
        margin: 1rem auto;
        
        align-items:center;
        label , button {
            background-color: red;
            color: #fff;
            font-size: 1.2rem;
            display:flex;
            justify-content:center;
            align-items:center;
            width:91%;
            height:3rem;
            margin:auto;
        }
        input , select , textarea {
            border: none;
            width:90%;
            height:3rem;
            background-color: #fff;
            margin:0 auto 1.5rem;
        }

        button {
            border:none;
            
        }
        

    }
`
const initialForm = { 
    // Name Input
    name:'',
    // Size Dropdown
    size:'', 
    // Topping Values
    spinach: false, mushrooms:false, olives:false, jalapenos:false,
    pineapple:false, pepperoni:false, beef:false, chicken:false,
    // Instructions TextArea
    instructions: '' }

const initialFormErrors = {
        name:'', size:'' }

const Form = () => {

    const [formValues , setFormValues] = useState(initialForm)
    const [formErrors , setFormErrors] = useState(initialFormErrors)
    const [disable , setDisable] = useState(true)
    const [displayOrder , setDisplayOrder] = useState([])

    // Validate Name and Size 
    const ValidateForm = (name , value) => {
        Yup.reach(FormSchema , name)
        .validate(value)
        .then( () => setFormErrors( {...formErrors , [name]: ''} ) )
        .catch( err => setFormErrors( {...formErrors , [name]: err.errors[0]} ) ) 
    }
    // Sets Form when value is changed
    const onChange = e => {
    const { name , value , type , checked } = e.target
    const isChecked = type === 'checkbox' ? checked : value
    setFormValues({ ...formValues, [name]: isChecked })
    ValidateForm( name , value )
    }

    // Enable Form Button
    useEffect( () => {
        FormSchema.isValid(formValues)
        .then(isValid => setDisable(!isValid))
        .catch( err => console.log(err))
    },[formValues] )

    // Object of Returned Form
    const newOrder = {
        name: formValues.name,
        size: formValues.size,
        toppings: ['spinach' , 'mushrooms', 'olives', 'jalapenos', 'pineapple ', 'pepperoni' , 'beef' , 'chicken']
        .filter(topping => formValues[topping]),
        instructions: formValues.instructions
    }
    // Posts New Order
    const postNewOrder = order => {
        axios.post("https://reqres.in/api/order",order)
        .then( res => {
            console.log(res.data)
            setDisplayOrder([...displayOrder , res.data])
            setFormValues(initialForm)
        })
        .catch( err => console.log(err))
    }
    // Returns Form value on submit
    const onSubmit = e => {
        e.preventDefault()
        postNewOrder(newOrder)
    }

    return(
        <PizzaForm>
            <h3>Build Your Own Pizza</h3>
            {/* Render Form Errors */}
            <div>{formErrors.name}</div>
            <div>{formErrors.size}</div>
        <form id='pizzaOrder' onSubmit={onSubmit}>
            {/* Name */}
                <label htmlFor='name'>Name</label>
                    
                    <input
                        name='name'
                        type='text'
                        onChange = {onChange}
                        value={formValues.name}
                        placeholder='Enter your name...'
                        data-cy='nameInput'
                    />
                {/* Size DropDown */}
                <label htmlFor='size'>Pizza Size</label>
                    
                    <select
                        name="size"
                        onChange = {onChange}
                        value={formValues.size}
                        data-cy='sizeSelect'>
                        <option value=''>--Select A Pizza Size--</option>
                        <option value='10in'>10in</option>
                        <option value='14in'>14in</option>
                        <option value='18in'>18in</option>
                    </select>
                {/* Toppings Checkboxes */}
                <label htmlFor='toppings'> Toppings</label>
                    
                    <Route path='/pizza'>
                        <Toppings name='toppings' onChange = {onChange}  values = {formValues}/>
                    </Route>
                {/* Special Instructions Text */}
                <label htmlFor='instructions'>Special instructions(Optional)</label>
                    
                    <textarea
                        name='instructions'
                        form='pizzaOrder'
                        onChange = {onChange}
                        value={formValues.instructions}
                        placeholder='Enter Special Instructions'
                        data-cy='introInput'
                    />
                
                <button
                disabled = {disable}
                data-cy='button'
                >Add to Order</button>
            </form>
           {displayOrder.map( order => {
               return (
                   <div key={order.id}>
                       <p>Name: {order.name}</p>
                       <p>Pizza Size: {order.size}</p>
                       <p>Toppings: {order.toppings}</p>
                       <p>Instructions: {order.instructions}</p>
                   </div>
               )
           })}
        </PizzaForm>
    )
}

export default Form