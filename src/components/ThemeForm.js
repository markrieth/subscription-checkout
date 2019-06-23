import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FORMS} from "../form/constants";
import {INDIGO, BLUE} from "../theme/constants"
import {renderRadioButton, renderTextField} from "../form/utils";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";


class ThemeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event, newValue, previousValue, name) {
    this.props.changePrimaryColor(newValue);
  }
  
  render() {
    return (
      <form>
        <Field
          name="primaryColor"
          label="Indigo"
          value={INDIGO}
          type="radio"
          color="primary"
          onChange={this.handleChange}
          component={renderRadioButton}
        />
        <Field
          name="primaryColor"
          label="Blue"
          value={BLUE}
          color="primary"
          type="radio"
          onChange={this.handleChange}
          component={renderRadioButton}
        />
      </form>
    )
  }
}

ThemeForm = reduxForm({
  form: FORMS.THEME.NAME,
  destroyOnUnmount: false,
  initialValues: {
    primaryColor: INDIGO
  }
})(ThemeForm);

export default ThemeForm;