import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/Header.jsx';
import ContactDetails from './components/Contacts';
import AllContacts from './components/ContactDetaisl';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div>
        <MainHeader Header="Contact Details" />

        <AllContacts />
      </div>
    );
  }
}

export default App;
