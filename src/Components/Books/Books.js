import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const { bookName, author, releaseDate, _id, image } = props.books;
    return (
        <div className="card online-course-card">
            <img src={`data:image/png;base64,${image.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ color: "#413960" }}>{bookName}</h5>
                <p className="card-text">{author}</p>
                <Link to={"/bookDetail/" + _id}>
                    <button className="sign-btn">borrow</button>
                </Link>
            </div>
            <div className="card-footer">
                <small className="text-muted"> <img src="data:image/png;base64,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" className="img-fluid" style={{ width: "16%" }} alt="" /> {releaseDate} </small>
            </div>
        </div>
    );
};

export default Books;