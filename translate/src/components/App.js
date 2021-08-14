import React from 'react';
import UserCreate from './UserCreate';
import LocaleSelector from './LocaleSelector';
import { LocaleStore } from '../contexts/LocaleContext';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LocaleStore>
          <LocaleSelector />
          <UserCreate />
        </LocaleStore>
      </div>
    );
  }
}

export default App;
