import React from 'react';
import { useNavigate } from 'react-router-dom';

function Identity() {
    const navigate = useNavigate();

    function nav() {
        navigate('/details');
    }

    return (
        <div className="body">
            <div className="box">
                <div className="innerbox">
                    <p className="intro">
                        <h2 className="welcome" style={{ marginBottom: '5px' }}> Welcome to Experience </h2>
                        <h1 className="nu"> NU ! </h1>
                    </p>
                    <h2 className="who"> I'm a </h2>
                    <div className="boxes">
                        <div className="visitor" onClick={nav}> Visitor </div>
                        <div className="parent" onClick={nav}> Parent </div>
                        <div className="student" onClick={nav}> Student </div>
                    </div>
                </div>
            </div>
            <div className="logo">
                <div className="demologo"></div>
            </div>
        </div>
    );
}

export default Identity;
