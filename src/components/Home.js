import React from "react"
// images
import pasta from '../Assets/pasta.jpg'
import healthy from '../Assets/healthy.jpg'
import noodles from '../Assets/noodles.jpg'
import burger from '../Assets/burger.jpg'
import fruit from '../Assets/fruit.jpg'
import cupcake from '../Assets/cupcake.jpg'
// images




const Home = () => {
  return (


    
  <section className = "gallery">
      <img src = {pasta} alt="Pasta by Lisa Fotios from Pexels"></img>
      <img src = {healthy} alt="Healthy Bowl by Ella Olsson from Pexels"></img>
      <img src = {noodles} alt="Noodles by Snapwire from Pexels"></img>
      <img src = {burger} alt="Burger & Fries by Jonathan Borba from Pexels"></img>
      <img src = {fruit} alt="Fruit Bowl by Trang Doan from Pexels"></img>
      <img src = {cupcake} alt="Cupcakes by Jess Bailey Designs from Pexels"></img>
  </section>
 
  )
    
};

export default Home;