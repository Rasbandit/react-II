import React, { Component } from 'react';
import Contact from './components/Contact';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state ={
      contacts: [
        {name: 'Bob Ross', number: '801-224-5567', id: 0},
        {name: 'Tim Allen', number: '801-987-9119', id: 1}
      ]
    }
    this.removeContact = this.removeContact.bind(this)
  }

  removeContact(id) {
    console.log(this)
    const newContacts = this.state.contacts.filter((contact) => contact.id !== id)
    this.setState({
      contacts: newContacts
    })

  }

  render() {
    const contacts = this.state.contacts.map((contact) =>
      <Contact data={contact} delete={this.removeContact} key={contact.id}/>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          {contacts}
      </div>
    );
  }
}

export default App;
