import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import { useAppSelector } from './redux/hooks';

export default function App() {
  const authentication = useAppSelector( state => state.authentication.value);
  const toURL = ():string => {
    if(authentication)return '/profile';
    return '/login'; 
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={toURL()}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}