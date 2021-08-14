import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

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
