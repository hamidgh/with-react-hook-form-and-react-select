import React from 'react';
import FloatingInputField from '../shared/inputField/floatingInputField';
import withForm, {WrappedComponentPropsType} from '../shared/withForm/withForm';

const elements = [
  {name: 'firstName', initialValue: '', required: true},
  {name: 'dateOfBirth', initialValue: '', required: true}
];
const PersonalInfoForm = (props: WrappedComponentPropsType) => {
  const {register, errors} = props;
  const requiredInputMessage: string = 'Fill out the field';

  return (
    <>
      <FloatingInputField
        required
        label="First name"
        formControlProps={register('firstName', {
          required: requiredInputMessage, maxLength: 80
        })}
        validationErrorMessage={errors['firstName']?.message}
      />
      <FloatingInputField
        required
        type="date"
        label="Date of birth"
        formControlProps={register('dateOfBirth', {
          required: requiredInputMessage
        })}
        validationErrorMessage={errors['dateOfBirth']?.message}
      />
    </>
  );
};

export default withForm(PersonalInfoForm, elements);