import React from 'react';
import './style/profilePage.style.scss';
import PersonalInfoForm from './personalInfoForm';
import {FieldValues} from 'react-hook-form';

const ProfilePage = () => {
  const _formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  return (
    <div className="profile-page">
      <h3 className="profile-page--header">
        My profile
      </h3>
      <PersonalInfoForm formSubmittedCallback={_formSubmittedCallback} />
    </div>
  );
};

export default ProfilePage;