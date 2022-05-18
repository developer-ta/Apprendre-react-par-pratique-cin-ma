import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

/* -------------------------------------------------------------------------- */

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<Home />} />
        <Route path="/coup-de-coeaur" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
