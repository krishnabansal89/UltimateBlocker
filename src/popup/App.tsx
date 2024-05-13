import React from 'react';
import { useState } from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
  const [isAllowed , setIsAllowed] = useState(false) 
  chrome.storage.local.get("isAllowed", (data)=>{
    setIsAllowed(data.isAllowed)
  })
  return (
    <div className="App">
      <div className="heading">
        Get the Way to Monk lifestyle
    {isAllowed ? <h1>Don't Let your Mind control You BUD!</h1> : <h1>You are killing it!!!</h1>}
      </div>
    </div>
  );
}

export default App;
