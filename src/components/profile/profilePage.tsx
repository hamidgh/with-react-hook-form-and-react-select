import React from 'react';
import PersonalInfoForm from './personalInfoForm';
import {FieldValues} from 'react-hook-form';

const ProfilePage = () => {
  const _formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  return (
    <PersonalInfoForm formSubmittedCallback={_formSubmittedCallback} />
  );
};

export default ProfilePage;