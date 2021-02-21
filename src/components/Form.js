import React, { useState } from 'react'
import Toppings from './Toppings'
import { Route } from 'react-router-dom'
import axios from 'axios'


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
    

      // Sets Form when value is changed
      const onChange = e => {
        const { name , value , type , checked } = e.target
        const isChecked = type === 'checkbox' ? checked : value
        setFormValues({ ...formValues, [name]: isChecked })

    }

    // Object of Returned Form
    const newOrder = {
        name: formValues.name,
        size: formValues.size,
        toppings: ['spinach' , 'mushrooms', 'olives', 'jalapenos', 'pineapple ', 'pepperoni' , 'beef' , 'chicken']
        .filter(topping => formValues[topping])
    }
    // Posts New Order
    const postNewOrder = order => {
        axios.post("https://reqres.in/api/order",order)
        .then( res => {
            console.log(res.data)
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
        <section>
            <h3>Build Your Own Pizza</h3>
        <form id='pizzaOrder' onSubmit={onSubmit}>
                <label>
                    Name
                    <input
                        name='name'
                        type='text'
                        onChange = {onChange}
                        value={formValues.name}
                        placeholder='enter your name'
                    />
                </label>
                <label>
                    Pizza Size
                    <select
                        name="size"
                        onChange = {onChange}
                        value={formValues.size}>
                        <option value=''>--Select A Pizza Size--</option>
                        <option value='10in'>10in</option>
                        <option value='14in'>14in</option>
                        <option value='18in'>18in</option>
                    </select>
                </label>
                <Route path='/pizza'>
                    <Toppings onChange = {onChange}  values = {formValues}/>
                </Route>
                <label>
                    Special instructions(Optional)
                    <textarea
                        name='instructions'
                        form='pizzaOrder'
                        onChange = {onChange}
                        value={formValues.instructions}
                        placeholder='Enter Special Instructions'
                    />
                </label>
                <button disable = {disable}>Add to Order</button>
            </form>
        </section>
    )
}

export default Form