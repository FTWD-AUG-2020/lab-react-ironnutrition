import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox.js'

function App() {
  const showFoods=()=>{
    return foods.map(eachfood=>{
      return <FoodBox 
        // name={eachfood.name}
        // calories={eachfood.calories}
        // image={eachfood.image}
        {...eachfood}
      />
    })
  }
  return (
    <div className="App">
      {showFoods()}
      
    </div>
  );
}




export default App;
