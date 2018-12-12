import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    const { ContactItemsss } = this.props;
    return (
      <div className="card card-body mb-4">
        <h4>{ContactItemsss.Name}</h4>

        <ul className="list-group">
          <li className="list-group-item">Email:{ContactItemsss.Email}</li>
          <li className="list-group-item">Phone:{ContactItemsss.Phone}</li>
        </ul>
      </div>
    );
  }
}

export default ContactDetails;
