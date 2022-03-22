import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/about' element={<AboutScreen />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/' element={<HomeScreen />} />
        {/* Redirecciona a Navigate en caso de no encontrar la ruta  */}
        <Route path="*" element={<Navigate to="/" replace />} /> 

      </Routes>
      <NavBar/>
    </Router>
  )
}
