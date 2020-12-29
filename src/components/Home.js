import React from "react"
import styled from "styled-components"
// images
import pasta from '../Assets/pasta.jpg'
import healthy from '../Assets/healthy.jpg'
import noodles from '../Assets/noodles.jpg'
import burger from '../Assets/burger.jpg'
import fruit from '../Assets/fruit.jpg'
import cupcake from '../Assets/cupcake.jpg'
// images

const H1 = styled.h1`
text-align: center;
font-size: 2rem;
font-weight: bold;
`

const Gallery = styled.section`
width: 90%;
margin: 3rem auto;
display: flex;
flex-flow: row wrap;
justify-content: space-around;

`
const FoodItem = styled.article`
display: flex;
flex-flow: column nowrap;
align-items: center;
width: 30%;

`

const Img = styled.img`
width: 100%;
height: auto;
margin: 1rem;

&:hover {
  cursor: pointer;
  opacity: 0.8;
}
`

const Home = () => {
  return (
    <section className="homepage">

    <H1>Food Delivery Just A Click Away</H1>
  <Gallery className = "gallery">
      <FoodItem>
          <h3>La Cena Ristorante</h3>
          <Img src = {pasta} alt="Pasta by Lisa Fotios from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
      <FoodItem>
          <h3>Super Food And Brew</h3>
          <Img src = {healthy} alt="Healthy Bowl by Ella Olsson from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
      <FoodItem>
          <h3>Bikkuri</h3>
          <Img src = {noodles} alt="Noodles by Snapwire from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
      <FoodItem>
          <h3>BurgerFi</h3>
          <Img src = {burger} alt="Burger & Fries by Jonathan Borba from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
      <FoodItem>
          <h3>Fla Juice & Bowl</h3>
          <Img src = {fruit} alt="Fruit Bowl by Trang Doan from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
      <FoodItem>
          <h3>CamiCakes Cupcakes</h3>
          <Img src = {cupcake} alt="Cupcakes by Jess Bailey Designs from Pexels"></Img>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </FoodItem>
  </Gallery>

  </section>
  )
    
};

export default Home;