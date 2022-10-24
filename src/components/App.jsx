import React, { Component } from 'react';
import ContactForm from './ContactForm';
// import Phonebook from './ContactForm';

export default class App extends Component {
  contactFormHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.contactFormHandler} />

        <h2>Contacts</h2>
        {/* <Filter />
  <ContactList /> */}
      </div>
    );
  }
}
