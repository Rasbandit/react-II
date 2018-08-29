import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super()
  }

  render() {
    const { name, number, id } = this.props.data;
    return (
      <div>
        <h4>{name}</h4>
        <h5>{number}</h5>
        <button onClick={() => this.props.delete(id)}>Delete Me</button>
      </div>
    )
  }
}

export default Contact

