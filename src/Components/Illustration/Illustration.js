import React from 'react';
import { Link } from 'react-router-dom';

const Illustration = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 side-text">
                        <p style={{ color: "#FD511A" }}>are you ready to learn?</p>
                        <h1>Learn With fun </h1>
                        <h1>on <span style={{ color: "#21B573" }}>any schedule</span></h1>
                        <p>Pick up any book and keep reading it (online).</p>

                        <a href="#books"> <button className="sign-btn">Get Started</button></a>
                    </div>
                    <div className="col-md-6">
                        <img src="https://rewon123.github.io/school-assigment/images/Photos/Illustration.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Illustration;