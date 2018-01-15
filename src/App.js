import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
