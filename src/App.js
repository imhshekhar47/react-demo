import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.scss';
import AppFooter from './components/app-footer/app-footer'
import { AppNavigationBar } from './components/app-header/app-header';
import { LoginComponent } from './components/login/login'

function App() {
  return (
    <div className="app">
      <AppNavigationBar></AppNavigationBar>
      <LoginComponent></LoginComponent>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
