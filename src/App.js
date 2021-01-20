import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import { Route, Link, Switch } from "react-router-dom";
import './App.css'
import styled from 'styled-components';
import pizza from './Assets/Pizza.jpg';



const Header = styled.header`
display: flex;
justify-content: space-between;
flex-direction:column;
align-items: center;
width: 90%;
margin: 0 auto;
color: red;
  nav{
    width:50%;
    display:flex;
    justify-content:center;
  }
  ul {
    display: flex;
justify-content: space-between;
margin: 0.2rem 2.5rem 0 0.2rem;
    li{
      list-style: none;
      font-size:1.5rem;
      margin: 0.2rem 1rem;
      text-align:center;
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction:row;
    nav{
      width:20%;
      justify-content: flex-end;
    }
    ul {
      margin: 0.2rem auto;
    }
  
}
`

const StyledLink =styled(Link)`
text-decoration: none;

color: red;
`
const Feature = styled.section`
width: 100%;
postion: relative;
text-align: center;
  img {
    width: 100%;
    height: 300px;
    object-fit:cover;
  }
  .feature-text{
    position: absolute;
	color:#fff;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width:50%;
	font-size: 0.8rem;
	padding: 1rem;
  }
  h2{
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    h2{
      font-size: 2rem;
    }
    
  
}

`

const Button = styled.button`
font-size: 1.2rem;
padding: 1rem 1.5rem;
border: 0.2rem solid red;
color: red;
@media only screen and (min-width: 768px) {
  
    font-size: 1.5rem;
  
`

const App = () => {
  return (
    <section>
    <Header>

<h2>Lambda Eats</h2>

 <nav>
   <ul>
       <li><StyledLink to ="/">Home</StyledLink></li>
       <li><StyledLink to ="/pizza">Order</StyledLink></li>
   </ul>
</nav>
</Header>

<Feature className="feature">
  <img src={pizza} alt="feature banner" ></img>
  <article className ='feature-text'>
    <h2>Your Favorite Food While Coding</h2>
    <Link to ="/pizza"><Button>Pizza?</Button></Link>
    
  </article>
 
</Feature>

 <Switch>
 <Route exact path = "/" component={Home} />
 <Route path = "/pizza" component={Form} />
   
 </Switch>
</section>
  );
};
export default App;
