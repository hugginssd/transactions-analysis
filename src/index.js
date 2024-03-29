import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import CardsComponent from './cards/cards';
import {Route, BrowserRouter as Router} from 'react-router-dom'; 


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyChUmimdAXTxkDpj9UIt0zAm7D_FDvB-zU",
    authDomain: "chat-app-21680.firebaseapp.com",
    databaseURL: "https://chat-app-21680.firebaseio.com",
    projectId: "chat-app-21680",
    storageBucket: "chat-app-21680.appspot.com",
    messagingSenderId: "347502776442",
    appId: "1:347502776442:web:e909df12d5137eaf"
});


const routing = ( 
        <Router >
            <div id = "routing-container" >
                <Route path = '/login' component = { LoginComponent } ></Route> 
                <Route path = '/signup' component = { SignupComponent } ></Route> 
                <Route path = '/cards' component = { CardsComponent } ></Route>
            </div>  
        </Router>
    );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
