import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <News />
        </div>
      </>
    )
  }
}

