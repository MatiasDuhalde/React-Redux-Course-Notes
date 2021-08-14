import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { locale: 'en_US' };

  onLocaleChange = (locale) => {
    this.setState({ locale });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLocaleChange('en_US')} />
          <i className="flag cl" onClick={() => this.onLocaleChange('es_CL')} />
          <i className="flag fr" onClick={() => this.onLocaleChange('fr_FR')} />
        </div>
        <LanguageContext.Provider value={this.state.locale}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
