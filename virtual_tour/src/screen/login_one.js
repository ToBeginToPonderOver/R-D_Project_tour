import React from 'react';
import { useNavigate } from 'react-router-dom';
import nuLogo from '../assets/logo.png';

function Identity() {
    const navigate = useNavigate();

    function nav() {
        navigate('/details');
    }

    return (
        <div className="body">
            <div className="box">
                <div className="innerbox">
                    <div className="in">
                        <p className="intro">
                            <h2 className="welcome" style={{ marginBottom: '5px' }}> Welcome to Experience </h2>
                            <h1 className="nu"> NU ! </h1>
                        </p>
                        <img src={nuLogo} alt="NU Logo" className="demologo" />
                    </div>
                    <h2 className="who"> I'm a </h2>
                    <div className="boxes">
                        <div className="visitor" onClick={nav}> Visitor </div>
                        <div className="parent" onClick={nav}> Parent </div>
                        <div className="student" onClick={nav}> Student </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Identity;
