import React from 'react';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//TODO: Decide if the renderers and the validators should have their own file. How does this fit into the ducks pattern?

export const renderTextField = ({
                                  input,
                                  label,
                                  meta: { touched, error },
                                  ...custom
                                }) => (
  <TextField
    label={label}
    {...input}
    {...custom}
    helperText={(touched && error) || custom.helperText}
    error={touched && error}
  />
);

export const renderRadioButton = (
  {
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
  <FormControlLabel
    {...input}
    control={<Radio {...custom}/>}
    label={label}
  />
);

export const renderSelect = ({
                               input,
                               label,
                               meta: { touched, error },
                               children,
                               ...custom
                           }) => (
  <FormControl fullWidth={custom.fullWidth} required={custom.required}>
    <InputLabel error={touched && error}>{label}</InputLabel>
    <Select
      label={label}
      inputProps={{...input}}
      value={input.value}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    >
      {Array.isArray(custom.options) && custom.options.map(option =>
        <MenuItem value={option.value || option}>
          {option.display || option}
        </MenuItem>
      )}
    </Select>
    <FormHelperText error={touched && error}>
      {(touched && error) || custom.helperText}
      </FormHelperText>
  </FormControl>
);

export const required = value => (value ? undefined : 'Required');

export const zipCode = value =>
  value && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
    ? undefined
    : 'Valid zipcode required.';