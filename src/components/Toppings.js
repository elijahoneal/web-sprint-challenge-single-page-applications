import React from 'react'


const Toppings = ( {onChange , values} ) => {

    return(
        <section>
            <label>
                Spinach
                <input
                    name='spinach'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.spinach}
                />
            </label>
            <label>
                Mushrooms
                <input
                    name='mushrooms'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.mushrooms}
                />
            </label>
            <label>
                Olives
                <input
                    name='olives'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.olives}
                />
            </label>
            <label>
                Jalapenos
                <input
                    name='jalapenos'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.jalapenos}
                />
            </label>
            <label>
                Pineapple
                <input
                    name='pineapple'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pineapple}
                />
            </label>
            <label>
                Pepperoni
                <input
                    name='pepperoni'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pepperoni}
                />
            </label>
            <label>
                Beef
                <input
                    name='beef'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.beef}
                />
            </label>
            <label>
                Chicken
                <input
                    name='chicken'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.chicken}
                />
            </label>
        </section>
    )
}

export default Toppings