import React from 'react';

function Contact(props) {
    // not exclusive to funcitonal components, can be done anywhere
    var { name, age, number, id } = props.contact;
    return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Number: {number}</h3>
      <button onClick={() => {props.deleteContact(id)}}>Break Heart</button>
      <hr />
    </div>
  )
}

export default Contact;