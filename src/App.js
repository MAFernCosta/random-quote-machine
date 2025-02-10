
import './App.css'; // CSS file style files
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap ICONS

import React, { useState } from 'react';

import {famousQuotes} from './quotes.js';
import {colors} from './colors.js';

function App(){
  const [quote, setQuote] = useState(famousQuotes[Math.floor(Math.random() * famousQuotes.length)]);
  const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  function newQuote(){
    setQuote( () => famousQuotes[Math.floor(Math.random() * famousQuotes.length)]);
    setColor( () => colors[Math.floor(Math.random() * colors.length)]);
  }
  
  const messageToShare = `${quote.quote} - ${quote.author}`;
  
  const backgroundStyle = {
    backgroundColor: color
  };
  const buttonStyle = {
    color: '#F5F5F5',
    backgroundColor: color
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vw-100 animation-background mybackground" style={backgroundStyle}>
        <div id='quote-box' className='align-items-center bg-light p-4 container-sm rounded content' style={{color: color}}>
          <p id='text' className='text-center fs-2 m-5'>
            <i className="bi bi-quote"></i>
            {quote.quote}
            <i className="bi bi-quote"></i>
          </p>
          <p id='author' className='text-end'>- {quote.author}</p>
          <div className='d-flex flex-row justify-content-between'>
            <button id='new-quote' className='btn' onClick={newQuote} style={buttonStyle} >New quote</button>
            <div className='d-flex justify-content-md-between'>
              <a 
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${messageToShare}`} 
                target="_blank" 
                id='tweet-quote' 
                className='btn fs-3 text-center mx-1' 
                style={buttonStyle}
                rel="noreferrer"
                ><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>
      </div>
      <footer className="d-flex align-items-center"> 
        <div className="container text-center ">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <span>Miguel Costa 2025</span>
              </div>
              <div className="col">
                <a href="https://github.com/MAFernCosta" className="link-light link-underline-opacity-0"><i class="bi bi-github fs-4"></i></a> 
                <a href="https://maferncosta.github.io/" className="link-light link-underline-opacity-0"><i class="bi bi-house-door-fill fs-4"></i></a>
                </div>
              </div>           
        </div>
      </footer>
    </>
  )
}

export default App;
