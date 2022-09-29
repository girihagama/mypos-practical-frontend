import logo from './logo.svg';
import './App.css';
import React, {useContext} from 'react';
import LoginForm from './Components/Login';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import {AuthContext} from './Contexts/AuthContext';

function App() {
  const {logged} = useContext(AuthContext);
  
  return (
      (logged) ? <Dashboard/> : <LoginForm/>
  );
}

export default App;