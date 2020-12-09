import React from 'react';

const Footer = () => {
    return (
        <div>
             <div className="last-bg">
                <div className="container d-flex align-items-center justify-content-center" style={{ padding: " 50px" }}>
                    <div className="row ">
                        <div className="col-md-4">
                            <p>Millions of people of all ages and from around the world are improving their lives with us</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <ul>
                                        <li className="course">Course</li>
                                        <li><a href="">Graphic Design</a></li>
                                        <li><a href="">Web Design</a></li>
                                        <li><a href="">Business</a></li>
                                        <li><a href="">Marketing</a></li>
                                        <li><a href="">Engineering</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4"><ul>
                                    <li className="course">Terms</li>
                                    <li><a href="">Graphic Design</a></li>
                                    <li><a href="">Web Design</a></li>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Engineering</a></li>
                                </ul></div>
                                <div className="col-md-4"><ul>
                                    <li className="course">Useful Link</li>
                                    <li><a href="">Graphic Design</a></li>
                                    <li><a href="">Web Design</a></li>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Engineering</a></li>
                                </ul></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="text-center">
                    <p style={{ color: "white", margin: 0 }}>Copyright © 2020 Rokomari.com</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;