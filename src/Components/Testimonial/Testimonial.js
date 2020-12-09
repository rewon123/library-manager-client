import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="container third margin">
                <h1 className="text-center testimonial">Testimonial</h1>
                <div className="row align-items-center mb-4 mt-4 p-4">
                    <div className="col-4 d-flex justify-content-end pl-1">
                        <img src="https://rewon123.github.io/school-assigment/images/Photos/Man.png" className="img-fluid" style={{ width: "40%" }} alt="" />
                    </div>
                    <div className="col-8 d-flex justify-content-start p-4">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;