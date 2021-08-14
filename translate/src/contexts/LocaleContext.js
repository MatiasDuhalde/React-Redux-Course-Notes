import React from 'react';

const Context = React.createContext('en_US');

export class LocaleStore extends React.Component {
  state = { locale: 'en_US' };

  onLocaleChange = (locale) => {
    this.setState({ locale });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLocaleChange: this.onLocaleChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
