import React, {useState} from 'react';
import './style/withForm.style.scss';
import {FieldValues, useForm} from 'react-hook-form';
import {Button, Form} from 'react-bootstrap';

type WithFormElementType = {
  name: string,
  initialValue: string,
  required: boolean
};
export type WrappedComponentPropsType = {
  register: any,
  errors: any
}
export type WithFormPropsType = {
  formSubmittedCallback: (data: FieldValues) => void
}

const withForm = (WrappedComponent: React.ElementType, elements: WithFormElementType[]) => {
  return (props: WithFormPropsType) => {
    const elementsWithInitialValues: any = {};
    elements.forEach((element: WithFormElementType) => {
      elementsWithInitialValues[element.name] = element.initialValue;
    });
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [shouldValidate, setShouldValidate] = useState(false);

    const onSubmit = async (data: FieldValues) => {
      props.formSubmittedCallback(data);
    };

    return (
      <Form noValidate validated={shouldValidate} onSubmit={handleSubmit(onSubmit)}>
        <WrappedComponent register={register} errors={errors} />
        <Button
          className="submit-button"
          variant="primary"
          type="submit"
          onClick={() => setShouldValidate(true)}
        >
          Submit
        </Button>
      </Form>
    );
  };
};

export default withForm;