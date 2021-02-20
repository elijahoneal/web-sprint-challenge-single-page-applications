import React from "react";
import { Link , Route , Switch } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
const App = () => {
  return (
    <div id='wrapper'>
      <header>
      <h1>Lambda Eats</h1>
     <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
     </nav>
      </header>
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
