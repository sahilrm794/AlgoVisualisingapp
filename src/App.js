import './App.css';  // Importing the CSS for the app
import Sorting from './Components/Sorting';  // Importing the Sorting component
import React from "react";  // Importing React
import Sieve from './Components/Sieve';  // Importing the Sieve component
import Graph from './Components/Graph';  // Importing the Graph component
import {
  BrowserRouter as Router,  // Importing Router for handling routing
  Route,  // Importing Route component
  Routes  // Importing Routes component for defining routes
} from "react-router-dom";  // Importing React Router for navigation
import Home from './Components/Home'; 

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Defining different routes for each page */}
          <Route path="/sorting" element={<Sorting/>} />  {/* Route for Sorting component */}
          <Route path="/sieve" element={<Sieve/>} />  {/* Route for Sieve component */}
          <Route path="/graph" element={<Graph/>} />  {/* Route for Graph component */}
          <Route path="/" element={<Home/>} />  {/* Default route for Home component */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
