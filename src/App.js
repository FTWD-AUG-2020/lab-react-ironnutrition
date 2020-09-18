import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './FoodBox.js'

function App() {

  let [toggle, setToggle] = useState(false)
  let [foodName, setFoodName] = useState('')
  let [foods, setFoods] = useState(foodsJSON)
  let [foodCalories, setFoodCalories] = useState('')
  let [newImage, setNewImage] = useState('')
  const summonFields = () => {
    setToggle(!toggle);
  }


  const showFoods = () => {
    return foods.map(eachfood => {
      return <FoodBox
        {...eachfood}
      />
    })
  }

  const showForm = () => {
    return toggle ? (
      <form onSubmit={submitFood}>
        <input placeholder="Enter food" type="text" name="food" onChange={(e) => setFoodName(e.target.value)}></input>
        <input placeholder="Enter calories" type="text" name="calories" onChange={(e) => setFoodCalories(e.target.value)}></input>
        <input placeholder="Enter image" type="url" name="image" onChange={(e) => setNewImage(e.target.value)}></input>
        <button>Submit</button>
      </form>
    ) : null
  }

  const submitFood = (e) => {
    e.preventDefault()
    let foodsCopy = [...foods];
    foodsCopy.unshift(
      {
        name: foodName,
        calories: foodCalories,
        image: newImage
      }
    )
    setFoods(foodsCopy)


  }
  console.log(foodName, foodCalories)
  return (
    <div className="App">
      <button onClick={summonFields}>Add New Food</button>
      {showForm()}
      {showFoods()}

    </div>

  );
}




export default App;
