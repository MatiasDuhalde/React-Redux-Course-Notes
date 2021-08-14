import React from 'react';

class Button extends React.Component {
  render() {
    return <button className="ui button primary">{this.props.children || 'Submit'}</button>;
  }
}

export default Button;
