import React from 'react';
import FloatingInputField from '../shared/inputField/floatingInputField';
import withForm, {WrappedComponentPropsType} from '../shared/withForm/withForm';
import FloatingSelectField from '../shared/selectField/floatingSelectField';

const elements = [
  {name: 'firstName', initialValue: '', required: true},
  {name: 'dateOfBirth', initialValue: '', required: true},
  {name: 'countryOfBirth', initialValue: 'Select an option', required: true}
];
const PersonalInfoForm = (props: WrappedComponentPropsType) => {
  const {register, errors} = props;
  const requiredInputMessage: string = 'Fill out the field';
  const requiredSelectionMessage: string = 'Select an option';

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
      <FloatingSelectField
        required
        label="Country of birth"
        selectOptions={['United States', 'Italy', 'Egypt', 'Iran']}
        formControlProps={register('countryOfBirth', {
          required: requiredSelectionMessage})}
        validationErrorMessage={errors['countryOfBirth']?.message}
      />
    </>
  );
};

export default withForm(PersonalInfoForm, elements);