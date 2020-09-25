import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
//css
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/upload">
          {/* TODO: Upload Component */}
        </Route>
        <Route path="/cart">
          {/* TODO: Cart Component */}
        </Route>
        <Route path="/profile">
          {/* TODO: profile Component */}
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
