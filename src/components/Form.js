import React, {useState , useEffect, Component} from "react"
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from "axios";
import * as yup from "yup";

const Err = styled.div`
    color:red;
    text-align:center;
`
const FormData = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 70%;
    margin: 2rem auto;
    background-color: red;
    padding: 0.5rem;
    border-radius: 2rem;
`
const Toppings = styled.section`
    display:flex;
    align-items: center;
    flex-direction: column;
`
const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
`
const Select =styled.select`
    font-size: 1.4rem;
    font-weight: 600;
`
const Input = styled.input`
    width: 50%;
    font-size: 1rem

`
const Button = styled.button`
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    border: 0.2rem solid red;
    color: red;

`

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least two letters"),
    size: yup
        .string()
        .required("Pizza Size is required")
        .oneOf(["10in" , "14in" , "18in"]),
    pepperoni: yup  
        .boolean()
        .oneOf([true , false], "N/A"),
    sausage: yup  
        .boolean()
        .oneOf([true , false], "N/A"), 
    beef: yup  
        .boolean()
        .oneOf([true , false], "N/A"), 
    chicken: yup  
        .boolean()
        .oneOf([true , false], "N/A"),
    instructions: yup
        .string()   
});  

const Form = () => {
    const [ pizzaOrder, setPizzaOrder] = useState({
        name: "", size: "", 
        pepperoni:false, sausage:false,
        beef:false, chicken:false,
        instructions: ""});

    const toppings = ["pepperoni", "sausage", "beef", "chicken"]

    const [errors , setErrors] = useState({
        name: "", size: "", 
        pepperoni:false, sausage:false,
        beef:false, chicken:false,
        instructions: ""});
    const [disabled , setDisabled] = useState(true);
    
    const setFormErrors = (name , value) => {
        yup.reach(formSchema , name).validate(value)
        .then( () => setErrors({...errors , [name]: ""}))
        .catch( err => setErrors({...errors , [name]: err.errors[0] }))
    }

    const handleChange = event => {
        const { name, type, value, checked } = event.target;
        const updateOrder = type === 'checkbox' ? checked : value;
        setFormErrors(name , updateOrder)
        setPizzaOrder({...pizzaOrder , [name]: updateOrder});
    }

    useEffect( () => {
        formSchema.isValid(pizzaOrder)
        .then(valid => setDisabled(!valid))
    }, [ pizzaOrder ])

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users" , pizzaOrder)
        .then( res => {
            console.log("success" , res.data);
            setPizzaOrder({
                name: "", size: "", 
                pepperoni:false, sausage:false,
                beef:false, chicken:false,
                instructions: ""})
            
        })
        .catch( err => console.log(err.res))
        
    
      }

    return (
    <section className = "formData">
            <Err className="errorList">{errors.name}</Err>
            <Err className="errorList">{errors.size}</Err>
            
            <FormData onSubmit = {submitForm}>
            <Label htmlFor = "name">Name</Label>
                <Input
                id="name"
                name = "name"
                value = {pizzaOrder.name}
                type = "text"
                placeholder = "Enter Name"
                onChange = {handleChange}
                />
            <Label htmlFor = "size">Pizza Size</Label>
            <Select id="size" name="size"  onChange = {handleChange}>
                <option type="text" value=" ">Choose A Size</option>
                <option type="text" value="10in">10" Pizza</option>
                <option type="text" value="14in">14" Pizza</option>
                <option type="text" value="18in">18" Pizza</option>
             </Select>


            {/* Toppings */}
            {toppings.map( topping => {
               return (
                <Toppings>
                <Label htmlFor = {topping}>{topping}</Label>
                <Input id={topping} name={topping} value={topping}
                type="checkbox" checked = {pizzaOrder.topping} onChange = {handleChange}/>
                </Toppings>
               )
               
            })}
            

            <Label htmlFor ="instructions">Special Instructions (Optional)</Label>
            <Input id="instructions" name="instructions" type="textarea" onChange = {handleChange}/>

            <Button disabled = {disabled} type ="submit">Add to Order</Button>
        </FormData>
        </section>
    )
}

export default Form