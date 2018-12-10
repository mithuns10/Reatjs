import React, { Component } from 'react';
import ContactDetails from '../components/Contacts';

class AllContacts extends Component {
  state = {
    ContactItems: [
      {
        id: 1,
        Name: ' Mithun',
        Email: ' mithuns10@gmail.com',
        Phone: ' 9995027437'
      },
      {
        id: 2,
        Name: ' Bindu',
        Email: ' binduk87@gmail.com',
        Phone: ' 9746699529'
      },
      {
        id: 3,
        Name: ' Anoop',
        Email: ' anoop@gmail.com',
        Phone: ' 9977426813'
      }
    ]
  };
  render() {
    const { ContactItems } = this.state;
    return (
      <div>
        {ContactItems.map(Items => (
          <ContactDetails id={Items.id} ContactItems={Items} />
        ))}
      </div>
    );
  }
}

export default AllContacts;
