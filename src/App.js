// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Counter from './components/Counter'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'
import {User} from './stuff.js'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link>        
          <Link to="/about">About</Link> 
          <Switch>
            
            <Route path="/about">
              <About></About>
            </Route>
  
            <Route path="/">
              <Home></Home>
            </Route>
            
          </Switch>       
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
