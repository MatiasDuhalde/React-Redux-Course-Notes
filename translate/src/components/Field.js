import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className="ui field">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type="text" name={this.props.name} />
      </div>
    );
  }
}

export default Field;
