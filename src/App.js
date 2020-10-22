import React from 'react';
import { Switch,Route,Link } from 'react-router-dom';
import Job from "./Job"
import Details from "./Details"
import Example from "./Example"
import ErrorBoundary from "./ErrorBoundary"
import './App.css';
import Post from './Post';
import * as Sentry from "@sentry/react";
import FallbackComponent from "./FallBack"

function App() {
  const methodDoesNotExist=()=>{
    throw new Error("new error")
  }
  const fetchBad=()=>{
    fetch("https://breakingbadapi.com/api/characterss")
    .then(res=>res.json())
    .then(result=>console.log(result,"hello"))
    .catch(err=>(console.log(err.message)))
  }
  return (
    <div className="App">
      <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
    <Link to="/new">EGGGGGGG</Link>

      <Switch>
        <Route exact path="/"  component={Job}/>
        <Route path={`/job/:id1`} component={Details}/>
        <Route exact path="/new"  component={Example}/>
        <Route exact path="/post" component={Post}/>
      </Switch>     
      </Sentry.ErrorBoundary>
      
    </div>
  );
}

export default App;
