import React from 'react'
import "../styles/form.css"

export default function Form() {
    return (
      <div className="card">
          <h3> Send a meme, have a laugh</h3>
        <div className="form">

          <input type="text"></input>
          <input type="text"></input>
          <button> Get Meme </button>
        </div>
      </div>
    );
}
