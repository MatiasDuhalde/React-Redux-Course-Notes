import React from 'react';
import { Field, Form } from 'react-final-form';

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {(() => this.renderError(meta))()}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
    return null;
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  validate(formValues) {
    const errors = {};
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
    return errors;
  }

  render() {
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, form, submitting }) => (
          <form className="ui form error" onSubmit={handleSubmit}>
            <Field name="title" label="Enter Title" component={this.renderInput} />
            <Field name="description" label="Enter Description" component={this.renderInput} />
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </form>
        )}
      ></Form>
    );
  }
}

export default StreamForm;
