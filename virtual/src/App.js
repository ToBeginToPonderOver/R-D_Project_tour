import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Identity from "./screen/login_one";
import EnterDetail from "./screen/details";

const App = () => {
    return (
        <Router>
            <div className="main">
                <Routes>
                    <Route path="/details" element={<EnterDetail />} />
                    <Route path="/" element={<Identity />} />
                </Routes>
                <Routes>
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
