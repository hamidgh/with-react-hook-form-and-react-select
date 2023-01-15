import React from 'react';
import './style/floatingInputField.style.scss';
import {FloatingLabel, Form} from 'react-bootstrap';

type FloatingInputFieldProps = {
  floatingLabelClasses?: string,
  formControlClasses?: string,
  formControlProps?: {},
  formGroupClasses?: string,
  label: string,
  placeholder?: string
  required?: boolean,
  step?: string,
  type?: string,
  validationErrorMessage?: string,
  value?: string
}
const FloatingInputField = (props: FloatingInputFieldProps) => {
  const placeholder = props.placeholder ? props.placeholder : props.label;
  const type = props.type ? props.type : 'text';

  return (
    <Form.Group className={`floating-input-field ${props.formGroupClasses}`}>
      <FloatingLabel className={props.floatingLabelClasses} label={props.label}>
        <Form.Control
          value={props.value}
          required={props.required}
          className={props.formControlClasses}
          type={type}
          step={props.step}
          placeholder={placeholder}
          {...props.formControlProps}
        />
        <Form.Control.Feedback type="invalid">
          {props.validationErrorMessage}
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};

export default FloatingInputField;