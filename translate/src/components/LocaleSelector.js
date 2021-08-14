import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

class LocaleSelector extends React.Component {
  static contextType = LocaleContext;

  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.context.onLocaleChange('en_US')} />
        <i className="flag cl" onClick={() => this.context.onLocaleChange('es_CL')} />
        <i className="flag fr" onClick={() => this.context.onLocaleChange('fr_FR')} />
      </div>
    );
  }
}

export default LocaleSelector;
