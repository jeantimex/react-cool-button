import React, { Component } from 'react';
import './styles.css';

class CoolButton extends Component {
  render() {
    return (
      <button className="cool-button">
        {this.props.children}
      </button>
    );
  }
}

export default CoolButton;