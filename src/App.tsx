import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ProfilePage from './components/profile/profilePage';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
