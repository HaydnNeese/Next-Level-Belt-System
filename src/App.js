import React from 'react';
import BeltGrid from './components/belt_grid/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <BeltGrid/>
    </div>
  );
}

export default App;

//Fully intend to store the exercise information into the database and send the data from the database to the webpage so that it can 
//Display the correct information to the page
//need to set up routes that will read the database
//route that will adjust the booleans of what exercises have been accomplished and what tests have been passed
