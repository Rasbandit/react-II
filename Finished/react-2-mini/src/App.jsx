import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super()

    this.state = {
      fontColor: 'black',
      fontSize: '12',
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
    this.updateState = this.updateState.bind(this)
  }

  // updateColor
  updateState(prop, value) {
    console.log(prop, value)
    this.setState({
      [prop]: value
    })
  }

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateState} />
          <ColorChanger update={this.updateState} allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateState} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateState} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            color={this.state.fontColor}
            fontSize={this.state.fontColor}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
