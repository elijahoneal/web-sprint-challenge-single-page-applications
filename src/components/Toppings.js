import React from 'react'
import styled from 'styled-components'

const TopStyle = styled.section`
display:flex;
flex-flow:column wrap;
align-items:center;
justify-content:center;
width:90%;
margin: 0 auto;
height:25rem;

    div {
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 30%;
        
    }
    .topping-label {
        color:red;
        background:none;
        width: 20%;
    }
    .topping {
        width:1rem;
    height:1rem;
    }
`


const Toppings = ( {onChange , values} ) => {

    return(
        <TopStyle>
            <div>
            <label htmlFor='spinach' className='topping-label'>Spinach</label>
                <input
                    name='spinach'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.spinach}
                    data-cy='spinachbox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='mushrooms' className='topping-label'>Mushrooms</label>
                <input
                    name='mushrooms'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.mushrooms}
                    data-cy='mushroomsbox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='olives' className='topping-label'>Olives</label>
                <input
                    name='olives'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.olives}
                    data-cy='olivesbox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='jalapenos' className='topping-label'>Jalapenos</label>
                <input
                    name='jalapenos'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.jalapenos}
                    data-cy='jalapenosbox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='pineapple' className='topping-label'>Pineapple</label>
                <input
                    name='pineapple'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pineapple}
                    data-cy='pineapplebox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='pepperoni' className='topping-label'>Pepperoni</label>
                <input
                    name='pepperoni'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pepperoni}
                    data-cy='pepperonibox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='beef' className='topping-label'>Beef</label>
                <input
                    name='beef'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.beef}
                    data-cy='beefbox'
                    className='topping'
                />
            </div>

            <div>
            <label htmlFor='chicken' className='topping-label'>Chicken</label>
                <input
                    name='chicken'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.chicken}
                    data-cy='chickenbox'
                    className='topping'
                />
            </div>
        </TopStyle>
    )
}

export default Toppings