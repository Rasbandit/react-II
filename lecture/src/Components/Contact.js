import React, {Component} from 'react';

class Contact extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h2>Name: {this.props.contact.name}</h2>
      <h3>Age: {this.props.contact.age}</h3>
      <h3>Number: {this.props.contact.number}</h3>
      <button onClick={() => {this.props.deleteContact(this.props.contact.id)}}>Break Heart</button>
      <hr />
      </div>
    )
  }
}

export default Contact;