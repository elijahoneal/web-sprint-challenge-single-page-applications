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
align-items: center;
width: 90%;
margin: 0 auto;
color: red;

`
const Ul = styled.ul`
display: flex;
justify-content: space-around;
text-align: center;
width: 100%;
margin: 0.2rem auto;
`

const Li = styled.li`
list-style: none;
`

const StyledLink =styled(Link)`
text-decoration: none;

color: red;
`
const Feature = styled.section`
width: 100%;
postion: relative;
text-align: center;

`
const Img = styled.img`
width: 100%;
height: 300px;
object-fit:cover;
`
const FeatureText = styled.article`
position: absolute;
	color:#fff;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	width:50%;
	font-size: 0.8rem;
	padding: 1rem;

`

const HeadLine = styled.h2`
font-size: 2rem;
`
const Button = styled.button`
font-size: 1.5rem;
padding: 1rem 1.5rem;
border: 0.2rem solid red;
color: red;

`

const App = () => {
  return (
    <section>
    <Header>

<h2>Lambda Eats</h2>

 <nav>
   <Ul>
       <Li><StyledLink to ="/">Home</StyledLink></Li>
       <Li><StyledLink to ="/pizza">Order</StyledLink></Li>
   </Ul>
</nav>
</Header>

<Feature className="feature">
  <Img src={pizza} alt="feature banner" ></Img>
  <FeatureText>
    <HeadLine>Your Favorite Food While Coding</HeadLine>
    <Link to ="/pizza"><Button>Pizza?</Button></Link>
    
  </FeatureText>
 
</Feature>

 <Switch>
 <Route exact path = "/" component={Home} />
 <Route path = "/pizza" component={Form} />
   
 </Switch>
</section>
  );
};
export default App;
