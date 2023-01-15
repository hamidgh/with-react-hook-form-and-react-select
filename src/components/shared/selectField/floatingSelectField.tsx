import React from 'react';
import './style/floatingSelectField.style.scss';
import {FloatingLabel, Form} from 'react-bootstrap';

type FloatingSelectFieldProps = {
  floatingLabelClasses?: string,
  formControlProps?: {},
  formGroupClasses?: string,
  label: string,
  optionClasses?: string,
  required?: boolean,
  selectClasses?: string,
  selectOptions: Array<string | number>,
  validationErrorMessage?: string,
  value?: string
}

const FloatingSelectField = (props: FloatingSelectFieldProps) => {
  return (
    <Form.Group className={`floating-select-field ${props.formGroupClasses}`}>
      <FloatingLabel controlId="floatingSelect" label={props.label}>
        <Form.Select required={props.required} {...props.formControlProps} value={props.value} defaultValue="Select">
          <option value="" >Select</option>
          {props.selectOptions.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{props.validationErrorMessage}</Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};

export default FloatingSelectField;