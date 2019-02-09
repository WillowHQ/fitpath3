import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {auth} from './Firebase.js';
import Button from '@material-ui/core/Button';
import AppBar from './appBar/OurAppBar.js';
import ClientTable from './clientTable/ClientTable.js';
import SignIn from './auth/SignIn.js';

const StatusEnum = Object.freeze({"Green":1, "Yellow":2, "Red":3})


class App extends Component {
  // componentDidMount() {
  //   auth.onAuthStateChanged((user) =>{
  //     if(user) {
  //       this.setState({user});
  //
  //     }
  //   })
  // }


  render() {
    return (
      <div className="App">
        <AppBar

        />

         <SignIn/>
       <ClientTable/>
      </div>
    );
  }
}

export default App;
