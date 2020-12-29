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
width: 90%;
margin: 0 auto;

`
const StyledLink =styled(Link)`
text-decoration: none;
list-style: none;
`
const Feature = styled.section`
width: 100%;

`
const Img = styled.img`
width: 100%;
height: 20%;
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
  <Img src={pizza} alt="feature banner" ></Img>
  <h2>Your Favorite Food While Coding</h2>
  <button>Pizza?</button>
</Feature>

 <Switch>
 <Route exact path = "/" component={Home} />
 <Route path = "/pizza" component={Form} />
   
 </Switch>
</section>
  );
};
export default App;
