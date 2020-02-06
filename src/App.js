import React from 'react';
import './App.scss';
import AppFooter from './components/app-footer'
import { AppNavigationBar } from './components/app-header';
import LoginComponent from './components/login'

function App() {
  return (
    <div className="app">
      <AppNavigationBar title="React application"></AppNavigationBar>
      <LoginComponent></LoginComponent>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
