import React, { Component } from 'react';
import Contact from './Components/Contact_Functional'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      contacts: [
        {
          name: 'Bob Ross',
          age: 52,
          number: '801-463-2345',
          id: 6
        },
        {
          name: 'Richard Simmons',
          age: 99,
          number: '800-193-9119',
          id: 9
        },
        {
          name: 'Mr. Roggers',
          age: 0,
          number: '765-765-9852',
          id: 12
        }
      ]
    }
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser(guyToDelete) {
    const newContacts = this.state.contacts
      .filter(e => guyToDelete !== e.id);
    this.setState({
      contacts: newContacts
    })
  }

  render() {
    const contacts = this.state.contacts.map((e) => {
      return (
        <Contact
          key={e.id}
          contact={e}
          deleteContact={this.deleteUser}
        />
      )
    })
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
