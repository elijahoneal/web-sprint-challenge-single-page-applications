import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import { Route, Link, Switch } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <section>
    <Header>

<h1>Lambda Eats</h1>

 <nav>
   <ul>
       <li><Link to ="/">Home</Link></li>
       <li><Link to ="/pizza">Order</Link></li>
   </ul>
</nav>
</Header>

 <Switch>
 <Route exact path = "/" component={Home} />
 <Route path = "/pizza" component={Form} />
   
 </Switch>
</section>
  );
};
export default App;
