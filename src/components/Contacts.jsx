import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <div>
        <h1>Name</h1>

        <ul>
          <li>Email:{this.props.Email}</li>
          <li>Phone:</li>
        </ul>
      </div>
    );
  }
}

export default ContactDetails;
