import React, { Component } from 'react';
import User from './components/User';
import Functional from './components/Functional';
import './App.css';

// function App() {
//   return (
//     <div className="App">
      
        
//         <h1>
//           I edited this App))
//         </h1>
        
      
//     </div>
//   );
// }

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
            <User name='Emil Ocaqverdiyev' field='Software Engineer' country='Azerbaijan'></User>
            <User name='Sebastian Vettel' field='Formula1 Driver' country='Germany'></User>
            <User name='Some One' country='World'></User>
        </div>
        <hr/>

        <div className="additionalfunctional">
            <Functional title = "Functional Component's title"></Functional>
            <Functional></Functional>
        </div>
        <hr/>

      </div>
    );
  }
}

export default App;
