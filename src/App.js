import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

import React from 'react';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class app extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="1" category="general" />} />
            <Route
              path="/entertainment"
              element={<News key="2" category="entertainment" />}
            />
            <Route
              path="/technology"
              element={<News key="3" category="technology" />}
            />
            <Route
              path="/health"
              element={<News key="4" category="health" />}
            />
            <Route
              path="/sports"
              element={<News key="5" category="sports" />}
            />
            <Route
              path="/business"
              element={<News key="6" category="business" />}
            />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
