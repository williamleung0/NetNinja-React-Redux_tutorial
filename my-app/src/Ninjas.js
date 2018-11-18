import React, { Component } from 'react';

//cycling through data summary
//get the destructure array - pass in state from props from app.js (in the <NestedComponent stateArray = {state}> call)
//.map cycles thru each item in the array, then applies a function (template) - stores it in a variable then returns to App.js 


class Ninjas extends Component {
    render() {
        //DESTRUCTURING assignment
        //so we dont have to type [this.props.]prop everytime and just prop
        // const { prop1,prop2, prop3 } = this.props 
        // and later just reference { prop }
        // read more about this topic later  
        const { ninjas } = this.props;
        //cycling and applying a templaet to each prop using map
        const ninjaList = ninjas.map(ninja => {
            return (
                //non unique error is thrown if no key/id is defined
                //need unique key and key={} 
                <div className="ninja" key = {ninja.id}>
                    <div> Name : {ninja.name}</div>
                    <div> age :  {ninja.age} </div>
                    <div> belt : {ninja.belt} </div>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas;