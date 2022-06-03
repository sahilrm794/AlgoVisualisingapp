import './App.css';
import Sorting from './Components/Sorting';
import React from "react";
import Sieve from './Components/Sieve';
import Graph from './Components/Graph';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route absolute path="/sorting" element={<Sorting/>}></Route>
          <Route absolute path="/sieve" element={<Sieve/>}></Route>
          <Route absolute path="/graph" element={<Graph/>}></Route>
          <Route absolute path="/" element={<Home/>}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
