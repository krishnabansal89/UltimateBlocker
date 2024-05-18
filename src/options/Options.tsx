import React from 'react'
import { createRoot } from "react-dom/client";
import './options.css';

export default function Options() {
  return (
    <div className='box'>
    
    <div className="header">
    The Very First Step
    </div>
    <div className="form">
      <div className="form-head">
        Personal Info
      </div>
      <div className="name">
          <div className="label-name">
            Name
          </div>
          <div className="input-text">
            <input type="text" placeholder="Name" autoComplete='off' />
          </div>
      </div>
      <div className="form-head">
        We had to do this 💀
      </div>
      <div className="name">
          <div className="label-name">
            Crush Name 💔
          </div>
          <div className="input-text">
            <input type="text" placeholder="Name..." autoComplete='off'/>
          </div>
      </div>
      <div className="name">
          <div className="label-name">
            Crush Number 📞
          </div>
          <div className="input-text">
            <input type="number" placeholder="Number..." autoComplete='off' />
          </div>
      </div>
        
      
    </div>
    </div>
  )
}
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Options />);