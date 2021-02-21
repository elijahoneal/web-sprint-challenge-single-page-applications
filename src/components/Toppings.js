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
                    data-cy='spinachbox'
                />
            </label>
            <label>
                Mushrooms
                <input
                    name='mushrooms'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.mushrooms}
                    data-cy='mushroomsbox'
                />
            </label>
            <label>
                Olives
                <input
                    name='olives'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.olives}
                    data-cy='olivesbox'
                />
            </label>
            <label>
                Jalapenos
                <input
                    name='jalapenos'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.jalapenos}
                    data-cy='jalapenosbox'
                />
            </label>
            <label>
                Pineapple
                <input
                    name='pineapple'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pineapple}
                    data-cy='pineapplebox'
                />
            </label>
            <label>
                Pepperoni
                <input
                    name='pepperoni'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.pepperoni}
                    data-cy='pepperonibox'
                />
            </label>
            <label>
                Beef
                <input
                    name='beef'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.beef}
                    data-cy='beefbox'
                />
            </label>
            <label>
                Chicken
                <input
                    name='chicken'
                    type='checkbox'
                    onChange = {onChange}
                    checked = {values.chicken}
                    data-cy='chickenbox'
                />
            </label>
        </section>
    )
}

export default Toppings