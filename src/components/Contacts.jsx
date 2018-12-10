import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    const { ContactItems } = this.props;
    return (
      <div className="container">
        <h4>{ContactItems.Name}</h4>

        <ul>
          <li>Email:{ContactItems.Email}</li>
          <li>Phone:{ContactItems.Phone}</li>
        </ul>
      </div>
    );
  }
}

export default ContactDetails;
