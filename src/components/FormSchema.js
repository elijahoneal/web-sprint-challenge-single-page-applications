import * as Yup from 'yup'


const FormSchema = Yup.object().shape({
    name: Yup
        .string()
        .required()
        .min( 3 , "Name must be at least 3 characters"),
    size: Yup
        .string()
        .oneOf( [ "10in" , "14in" , "18in" ] , "Pizza Size is Required" ),
        spinach: Yup.boolean(), 
        mushrooms:Yup.boolean(), 
        olives:Yup.boolean(), 
        jalapenos:Yup.boolean(),
        pineapple:Yup.boolean(), 
        pepperoni:Yup.boolean(), 
        beef:Yup.boolean(), 
        chicken:Yup.boolean(),
    instructions: Yup
        .string()
})


export default FormSchema

