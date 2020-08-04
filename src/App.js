import React, { Component } from 'react';
import "./reset.css";
import './App.css';
import axios from "axios"
import Header from "./components/Header"
import Players from './components/Players'
import Input from "./components/Input"

class App extends Component {
  constructor() {
    super()
    this.state = {
      roster: []
    }
  }


  componentDidMount() {
    this.getRoster()
  }
  getRoster = () => {
    axios.get("/api/roster")
      .then(res => {
        this.setState({
          roster: res.data
        })
      })
      .catch( err => console.log(err))
  }

  addPlayer = (name, college, image) => {
    axios.post("/api/roster", {name, college, image})
    .then(res => {
      this.setState({
        roster: res.data
      })
    })
    .catch(err => console.log(err))
  }

  
  render(){
    return (
      <div>
        <Header/> 
        <Players/>
        <Input addPlayer = {this.addPlayer}/>

      </div>
    )
  }
}


export default App;
