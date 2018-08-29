import React from "react";

function Contact(props) {
  const { name, number, id } = props.data
  return (
    <div>
      <h4>{name}</h4>
      <h5>{number}</h5>
      <button onClick={() => props.delete(id)}>Delete Me</button>
    </div>
  )
}

export default Contact