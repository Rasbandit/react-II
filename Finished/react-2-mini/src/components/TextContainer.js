import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'asdfasdfasdfasdf',
      color: props.fontColor
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="textContainer">
        <textarea
          style={this.props}
          onChange={this.updateText}
          value={this.state.text}
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




