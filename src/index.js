import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const API_KEY = "YdO7fncQ9oh2ubnBzxQDdaapPzWRxri9"
const API_URL = `http://api.giphy.com/v1/gifs/search?q=pigs&api_key=${API_KEY}`
let gifs

//get gifs
(() =>{
    fetch(API_URL, {
        crossDomain: true
    })
    .then(resp => resp.json())
    .then(data=>{
      gifs = [...data.data]
      ReactDOM.render(<App pigGifs={gifs}/>, document.getElementById('root'));
    })
})();

