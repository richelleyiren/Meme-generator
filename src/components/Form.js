import React, {useState} from 'react'
import "../styles/form.css"
import Data from "../data"

export default function Form() {
    const [url, setUrl] = useState('')

   const getUrl = ()=>{
       setUrl(memeUrl)
   }

   const getMeme = Data.data.memes
   const randomMeme = Math.floor(Math.random() * getMeme.length)
   const memeUrl = getMeme[randomMeme].url

    return (
      <div className="card">
          <h3> Send a meme, have a laugh</h3>
        <div className="form">

          <input type="text"></input>
          <input type="text"></input>
          <button onClick={getUrl}> Get Meme </button>
        </div>
         <img src={url} className="image"></img>
      </div>
    );
}
