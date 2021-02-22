import React from 'react'
import styled from 'styled-components'
import pasta from '../images/pasta.jpg'
import healthy from '../images/healthy.jpg'
import noodles from '../images/noodles.jpg'
import burger from '../images/burger.jpg'
import fruit from '../images/fruit.jpg'
import cupcake from '../images/cupcake.jpg'
import  header from '../images/pizza-header.jpg'

const HomePage = styled.section`
.banner {
    position: relative;
    text-align: center;
    color: white;
    
    img {
        width:90%;
        height:10rem;
        object-fit:cover;
    }
}
h1{
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gallery { width: 90%;
    margin: 3rem auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    article {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        width: 80%;
        @media only screen and (min-width: 768px) {
            width: 45%;
        }
        @media only screen and (min-width: 1024px) {
            width: 30%;
        }
    }
    img {
        width: 100%;
        height: auto;
        margin: 1rem;

        &:hover {
        cursor: pointer;
        opacity: 0.8;
        }
    }
}
`


const Home = () => {

return(
    <HomePage>
        <section className='banner'>
        <img src= {header} alt='Pizza by Pixabay'/>
        <h1>Your Favorite food delivered while coding</h1>
        </section>
  <section className = "gallery" >
      <article>
          <h3>La Cena Ristorante</h3>
          <img src = {pasta} alt="Pasta by Lisa Fotios from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
      <article>
          <h3>Super Food And Brew</h3>
          <img src = {healthy} alt="Healthy Bowl by Ella Olsson from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
      <article>
          <h3>Bikkuri</h3>
          <img src = {noodles} alt="Noodles by Snapwire from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
      <article>
          <h3>BurgerFi</h3>
          <img src = {burger} alt="Burger & Fries by Jonathan Borba from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
      <article>
          <h3>Fla Juice & Bowl</h3>
          <img src = {fruit} alt="Fruit Bowl by Trang Doan from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
      <article>
          <h3>CamiCakes Cupcakes</h3>
          <img src = {cupcake} alt="Cupcakes by Jess Bailey Designs from Pexels"/>
          <span className="time">30-45min</span><span className="fee">$3 delivery fee</span>
      </article>
  </section>
    </HomePage>
)
}

export default Home