import React from 'react';
import FloatingInputField from '../shared/inputField/floatingInputField';
import withForm, {WrappedComponentPropsType} from '../shared/withForm/withForm';
import FloatingSelectField from '../shared/selectField/floatingSelectField';
import FloatingMultipleSelectField from '../shared/selectField/floatingMultipleSelectField';
import RadioField from '../shared/checkField/radioField';

const PersonalInfoForm = (props: WrappedComponentPropsType) => {
  const {register, errors, controller, control} = props;
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
      <FloatingMultipleSelectField
        control={control}
        controller={controller}
        selectLabel="Favorite color"
        selectName="favoriteColor"
        selectOptions={[{value: 'RED', label: 'Red'}, {value: 'BLUE', label: 'Blue'}]}
        required={register('favoriteColor', {
          required: requiredSelectionMessage})}
        validationErrorMessage={errors['favoriteColor']?.message}
      />
      <RadioField
        required
        fieldName="gender"
        label="Gender"
        options={[{name: 'Female', value: 'Female'}, {name: 'Male', value: 'Male'}]}
        register={register}
        validationErrorMessage={errors['gender']?.message}
      />
    </>
  );
};

export default withForm(PersonalInfoForm);