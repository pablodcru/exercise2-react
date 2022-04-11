/* I make this component like this, because after some unsuccessful attempts to redirect to another page after clicking on one element from the API, I gave up to continue with the next exercise. Because of that, this component has routes and so on, but the path /userinfo does not work correctly. When I tried to redirect to a new page with the data, this data dissapeared, so I could not display anything. I guess it could be done using redux for saving this data */

import './App.css';
import Header from './header';

import React from 'react';
import OnCheck from './onCheck.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToggleMode from './toggleMode';
import Home from './home';


function App() {


  return (
    <Router>

      <div className="App">
        <ToggleMode/>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userinfo" element={<OnCheck />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
