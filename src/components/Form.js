import React, {useState , useEffect} from "react"
import axios from "axios";
import * as yup from "yup";

const toppings = ["pepperoni", "sausage", "beef", "chicken"]

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least two letters"),
    size: yup
        .string()
        .oneOf(["10 in"] , ["14 in"] , ["18 in"]),
    pepperoni: yup  
        .boolean()
        .oneOf([true], "N/A"),
    sausage: yup  
        .boolean()
        .oneOf([true], "N/A"), 
    beef: yup  
        .boolean()
        .oneOf([true], "N/A"), 
    chicken: yup  
        .boolean()
        .oneOf([true], "N/A"),
    instructions: yup
        .string()   
});  

const Form = () => {
    const newOrder = {name: "", size: "", toppings: "", instructions: ""}
    const[ pizzaOrder, setPizzaOrder] = useState(newOrder);
    const [errors , setErrors] = useState(newOrder);
    const [disabled , setDisabled] = useState(true);
    
    console.log(pizzaOrder);
    const setFormErrors = (name , value) => {
        yup.reach(formSchema , name).validate(value)
        .then( () => setErrors({...errors , [name]: ""}))
        .catch(err => setErrors({...errors , [name]: err.errors[0] }))
    }

    const handleChange = event => {
        const { name, type, value, checked } = event.target;
        const updateOrder = type === 'checkbox' ? checked : value;
        setFormErrors(name , updateOrder)
        setPizzaOrder({...pizzaOrder , [name]: updateOrder});
    }

    const [post , setPost] = useState([]);
    useEffect( () => {
        formSchema.isValid(pizzaOrder).then((valid) => setDisabled(!true))
    },[pizzaOrder])

    const [ order, setOrder] = useState([]);

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users" , pizzaOrder)
        .then( res => {
            setPost(res.data);
            console.log("success" , post);
            setOrder(...post)
            setPizzaOrder(newOrder)
        })
        .catch( err => console.log(err.res))
        
    
      }

    return (
    <section className = "formData">
            <div className="errorList">{errors.name}</div>
            
            <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
                <input
                id="name"
                name = "name"
                value = {pizzaOrder.name}
                type = "text"
                placeholder = "Enter Name"
                onChange = {handleChange}
                />
            <label htmlFor = "size"></label>
            <select id="size" name="size" form ="pizzaSize" onChange = {handleChange}>
                <option value="10in">10" Pizza</option>
                <option value="14in">14" Pizza</option>
                <option value="18in">18" Pizza</option>
             </select>

            {/* Toppings */}
            {toppings.map( topping => {
               return (
                <section>
                <label htmlFor = {topping}>{topping}</label>
                <input id={topping} name={topping} value={topping}
                type="checkbox" checked = {pizzaOrder.topping} onChange = {handleChange}/>
                </section>
               )
               
            })}
            

            <label htmlFor ="instructions">Special Instructions (Optional)</label>
            <input id="instructions" name="instructions" type="textarea" onChange = {handleChange}/>

            <button disabled = {disabled} type = "submit">Add to Order</button>
        </form>
        {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}
        </section>
    )
}

export default Form