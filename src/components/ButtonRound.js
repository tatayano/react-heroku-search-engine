import React from 'react';
import Button from './Button';

class ButtonRound extends Button {

  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>  
    );
  }

};

export default ButtonRound;
