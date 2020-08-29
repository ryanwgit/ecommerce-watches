import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Button from './Button';
import '../styles/App.css';
import '../styles/button.css';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
 </>
  );
}

export default App;