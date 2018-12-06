import React, { Component } from 'react';
import './App.css';
import MainHeader from './components/Header.jsx';
import ContactDetails from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div>
        <MainHeader Header="Contact Details" />

        <ContactDetails
          Name=" Mithun"
          Email=" mithuns10@gmail.com"
          phone=" 9995027437"
        />
      </div>
    );
  }
}

export default App;
