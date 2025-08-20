//import logo from './logo.svg
import Square from './Square';
import Input  from './Input';

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
