import React from "react"



const pasta = require('../Assets/pasta.jpg');
// const healthy = require('../src/Assets/healthy.jpg');
// const noodles = require('../src/Assets/noodles.jpg');
// const burger = require('../src/Assets/burger.jpg');
// const fruit = require('../src/Assets/fruit.jpg');
// const cupcake = require('../src/Assets/cupcake.jpg');



const Home = () => {
  return (
    
  <section>
    <img src = {pasta} alt="Pasta by Lisa Fotios from Pexels"></img>
    {/* <img src = {healthy} alt="Healthy Bowl by Ella Olsson from Pexels"></img>
    <img src = {noodles} alt="Noodles by Snapwire from Pexels"></img>
    <img src = {burger} alt="Burger & Fries by Jonathan Borba from Pexels"></img>
    <img src = {fruit} alt="Fruit Bowl by Trang Doan from Pexels"></img>
    <img src = {cupcake} alt="Cupcakes by Jess Bailey Designs from Pexels"></img> */}
  </section> 
  )  
    
}

export default Home;