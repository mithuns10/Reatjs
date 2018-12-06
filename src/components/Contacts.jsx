import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <div className="container">
        <h4>{this.props.Name}</h4>

        <ul>
          <li>Email:{this.props.Email}</li>
          <li>Phone:{this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default ContactDetails;
