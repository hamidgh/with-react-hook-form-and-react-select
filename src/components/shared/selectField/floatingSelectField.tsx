import React from 'react';
import './style/floatingSelectField.style.scss';
import {FloatingLabel, Form} from 'react-bootstrap';

type FloatingSelectFieldProps = {
  value?: string,
  required?: boolean
  validationErrorMessage?: string,
  formGroupClasses?: string,
  floatingLabelClasses?: string,
  selectClasses?: string,
  optionClasses?: string,
  label: string,
  selectOptions: Array<string | number>,
  formControlProps?: {}
}

const FloatingSelectField = (props: FloatingSelectFieldProps) => {
  return (
    <Form.Group className={`floating-select-field ${props.formGroupClasses}`}>
      <FloatingLabel controlId="floatingSelect" label={props.label}>
        <Form.Select required={props.required} {...props.formControlProps} value={props.value} defaultValue="">
          <option disabled />
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