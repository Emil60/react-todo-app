import React, { Component } from 'react';
import User from './components/User';
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
      <div className="App">
        <div className="initial">
          <h1>Xello React</h1>
          <h2> Another h</h2>
          <h3>{ 5+3 }</h3>
          <h3>{ 'Emil'.toUpperCase() }</h3>
          <h3>{ a }</h3>
          <div>
            {
              flag ? <p>Flag is True</p> 
              : <p>Flag is False</p>
            }
          </div>
        </div>
        <div className="additional">
            <User></User>
        </div>
      </div>
    );
  }
}

export default App;
