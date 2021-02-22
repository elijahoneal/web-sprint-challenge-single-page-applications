import React from "react";
import { Link , Route , Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import Form from './components/Form'
import logo from './images/lambda.png'
const Header = styled.header`
display: flex;
justify-content: space-between;
flex-direction:column;
align-items: center;
width: 90%;
margin: 0 auto;
color: red;
  .logo{
    display:flex;
    align-items:center;
    img {
      width:8%;
      height:auto;
      margin-right:0.5rem;
    }
  }
  nav{
    width:50%;
    ul{
      display:flex;
      justify-content:space-evenly;
    }
    li{ list-style: none;}
    a{
      text-decoration:none;
      font-size: 1.5rem;
      color:red;
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

const App = () => {
  return (
    <div id='wrapper'>
      <Header>
        <div className='logo'>
        <img src={logo} alt='lambda logo'/>
        <h1>Lambda Eats</h1>
      </div>
     <nav>
       <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/pizza'>Order</Link></li>
        </ul>
     </nav>
      </Header>
      <main>
        <Switch>
          <Route path='/pizza'>
            <Form/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
