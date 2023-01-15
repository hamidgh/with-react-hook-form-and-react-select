import React, {useState} from 'react';
import './style/radioField.style.scss';
import {Form} from 'react-bootstrap';

export type RadioFieldType = Array<{name: string, value?: string}>;

type RadioFieldProps = {
  checkClasses?: string,
  checked?: boolean,
  customRadioProps?: {},
  fieldName?: string,
  formGroupClasses?: string,
  inline?: boolean,
  label?: string,
  labelClasses?: string,
  options?: RadioFieldType,
  register? : any,
  required?: boolean,
  validationErrorMessage?: string
}

const RadioField = (props: RadioFieldProps) => {
  const formGroupClasses = props.formGroupClasses ? props.formGroupClasses : '';
  const labelClasses = props.labelClasses ? props.labelClasses : '';
  const [value, setValue] = useState();
  const _handleOnChange = (e: any) => {
    setValue(e?.target?.value);
  };
  return (
    <Form.Group className={`radio-field ${formGroupClasses}`}>
      <Form.Label className={labelClasses}>{props.label}</Form.Label>
      {props.options?.map((item: any, index) => {
        return (
          <Form.Check
            {...props.customRadioProps}
            {...props?.register(props.fieldName, {
              onChange: _handleOnChange,
              required: props.required})}
            checked={item.value === value}
            id={`inline-radio-${item.value}-${index}`}
            inline={props.inline}
            key={index}
            label={item.name}
            required={props.required}
            type="radio"
            value={item.value}
          />
        );
      })}
    </Form.Group>
  );
};

export default RadioField;