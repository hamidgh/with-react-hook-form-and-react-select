import React from 'react';
import './style/multiSelectField.style.scss';
import Select from 'react-select';
import {Form} from 'react-bootstrap';
import CustomSelectValueContainer from './customSelectValueContainer';

export type SelectOptionType = {
  value: string,
  label: string
}
type MultipleSelectFieldProps = {
  formGroupClasses?: string,
  customReactSelectProps?: {},
  required?: any,
  control: any,
  controller: any,
  value?: any
  selectLabel: string
  defaultValue?: SelectOptionType[]
  selectName: string,
  selectOptions: SelectOptionType[],
  validationErrorMessage?: string
}
const FloatingMultipleSelectField = (props: MultipleSelectFieldProps) => {
  const Controller = props.controller;

  return (
    <Form.Group className={`multiple-select-field ${props.formGroupClasses}`}>
      <Controller
        control={props.control}
        defaultValue={props.defaultValue}
        name={props.selectName}
        render={({field: {onChange, value, name, ref}, formState}: any) => (
          <>
            <Select
              isMulti
              className="hamid"
              ref={ref}
              name={name}
              {...props.customReactSelectProps}
              components={{ValueContainer: CustomSelectValueContainer}}
              placeholder={props.selectLabel}
              styles={{
                control: styles => ({
                  ...styles,
                  borderColor: formState?.errors?.[name] ? '#dc3545' : styles.borderColor,
                  boxShadow: formState?.errors?.[name] ? '#dc3545' : styles.boxShadow
                }),
                container: (provided, state) => ({
                  ...provided,
                  marginTop: 10
                }),
                valueContainer: (provided, state) => ({
                  ...provided,
                  overflow: 'visible',
                  marginTop: 10,
                  height: 50
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  position: 'absolute',
                  marginTop: -10,
                  top: '0%',
                  transition: 'top 0.1s, font-size 0.1s',
                  fontSize: (state.hasValue || state.selectProps.inputValue) && 13
                })
              }}
              options={props.selectOptions}
              value={props.selectOptions.find(c => c.value === value)}
              onChange={(e: any) => e.value ? onChange(e.value) : onChange(e.map((c: any) => c.value))}
            />
            <Form.Control.Feedback type="invalid" className={formState?.errors && 'show-error'}>{props.validationErrorMessage}</Form.Control.Feedback>
          </>
        )}
      />
    </Form.Group>
  );
};

export default FloatingMultipleSelectField;