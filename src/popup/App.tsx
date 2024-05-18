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
      
    </div>
  );
}

export default App;
