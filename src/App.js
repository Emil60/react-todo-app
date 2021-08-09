import React, { Component } from 'react';
import Users from './components/Users';
import Functional from './components/Functional';
import './App.css';


class App extends Component{
  
  render(){
    const a = 5;
    const flag = true;
    return(
      <div className="App container">
        <div className="initial">
          <h1>Xello React</h1>
          <h3>{ 5+3 }</h3>
          <h3>{ 'Emil'.toUpperCase() }</h3>
          <h3>{ a }</h3>
          <div>
            {
              flag ? <p>Flag is True</p> 
              : <p>Flag is False</p>
            }
          </div>
          <hr/>
        </div>
        <div className="additional">
            <Users />
        </div>
        <hr/>

        <div className="additionalfunctional">
            <Functional title = "Functional Component's title"/>
            <Functional/>
        </div>
        <hr/>

      </div>
    );
  }
}

export default App;
