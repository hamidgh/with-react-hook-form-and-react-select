import React, {useState} from 'react';
import './style/withForm.style.scss';
import {FieldValues, useForm, Controller} from 'react-hook-form';
import {Button, Form} from 'react-bootstrap';

export type WrappedComponentPropsType = {
  register: any,
  errors: any,
  controller: any,
  control: any
}
export type WithFormPropsType = {
  formSubmittedCallback: (data: FieldValues) => void,
  submitButtonLabel?: string
}

const withForm = (WrappedComponent: React.ElementType) => {
  return (props: WithFormPropsType) => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const [shouldValidate, setShouldValidate] = useState(false);

    const onSubmit = async (data: FieldValues) => {
      props.formSubmittedCallback(data);
    };

    return (
      <Form noValidate validated={shouldValidate} onSubmit={handleSubmit(onSubmit)}>
        <WrappedComponent register={register} errors={errors} controller={Controller} control={control} />
        <Button
          className="submit-button"
          variant="primary"
          type="submit"
          onClick={() => setShouldValidate(true)}
        >
          {props.submitButtonLabel ? props.submitButtonLabel : 'Submit'}
        </Button>
      </Form>
    );
  };
};

export default withForm;