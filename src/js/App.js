// import "bootstrap";
import '../assets/styles/app.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <div className="body body-full-height">
    <Route exact path="/" component={Home} />
  </div>
);

export default App;