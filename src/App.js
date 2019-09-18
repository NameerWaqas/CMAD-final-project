import React from 'react';
import './App.css';
import NavBar from './containers/NavBar(main)'
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn8hprgRoLh4HwNoJ4tbDMfuJLzzmyy8k",
  authDomain: "webappbynameer.firebaseapp.com",
  databaseURL: "https://webappbynameer.firebaseio.com",
  projectId: "webappbynameer",
  storageBucket: "webappbynameer.appspot.com",
  messagingSenderId: "576423193003",
  appId: "1:576423193003:web:3edf4697ad8ad389"
};
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
       
      <NavBar />{/* Navigation  Bar*/}      
     
    </div>
  );
}
export default App;
