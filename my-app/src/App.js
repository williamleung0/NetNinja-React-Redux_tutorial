// ep 11, 12 , 13 , 14




import React, { Component } from 'react';
//to nest from other file, import below 
import Ninjas from './Ninjas';

//parent compnent, <Ninjas /> child component 
class App extends Component {
  //use a state to pass in a list of multiple props
  state = {
    ninjas : [
      { name:"Bobbeh", age:"21" , belt:"gucc", id:1},
      { name:"Robbeh", age:"22", belt:"louis" , id:2}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1> first react app</h1>
        <p> welcome</p>
        //nested component from Ninjas.js
        <Ninjas ninjas = {this.state.ninjas} />
        {/* //multiple props
        <Ninjas name="Bobbeh" age="21" belt="green" />
        <Ninjas name="Robbeh" age="22" belt="louis" /> */}
      </div>
    );
  }
}


export default App;
