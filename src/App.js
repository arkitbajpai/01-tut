//import logo from './logo.svg';
import './App.css';
import Input  from './Input';
import Square from './Square';
import React, { useState } from 'react';
function App() {
  const [colorValue, setColorValue] = useState('');
  return (
    <div className="App">
      <Square colorValue={colorValue}/>
   <Input 
   colorValue={colorValue}
    setColorValue={setColorValue}
   />
   </div>
   
  );
}

export default App;
