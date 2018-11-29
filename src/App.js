import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/Header.jsx';
class App extends Component {
  render() {
    return (
      <div className="container">
        <MainHeader Header="Contact Details" />
      </div>
    );
  }
}

export default App;
