import React from "react";
import { Link } from 'react-router-dom'
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
    </div>
  );
};
export default App;
