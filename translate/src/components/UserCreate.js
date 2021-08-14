import React from 'react';
import Field from './Field';
import Button from './Button';
import LanguageContext from '../contexts/LanguageContext';

class UserCreate extends React.Component {
  static contextType = LanguageContext;

  translations = {
    name: {
      en_US: 'Name',
      es_CL: 'Nombre',
      fr_FR: 'Nom',
    },
    submit: {
      en_US: 'Submit',
      es_CL: 'Enviar',
      fr_FR: 'Envoyer',
    },
  };

  render() {
    return (
      <div className="ui form">
        <Field name="name" label={this.translations.name[this.context]} />
        <Button>{this.translations.submit[this.context]}</Button>
      </div>
    );
  }
}

export default UserCreate;
