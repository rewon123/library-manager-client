import React, { useState } from 'react';
import Books from '../../Components/Books/Books';
import Footer from '../../Components/Footer/Footer';
import Illustration from '../../Components/Illustration/Illustration';
import Header from '../../Components/NavBar/Header';
import Statistic from '../../Components/STATISTIC/Statistic';
import Testimonial from '../../Components/Testimonial/Testimonial';
import { useEffect } from 'react';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://library-management-rewon.herokuapp.com/allBooks`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div style={{ background: "#F0FFF0" }}>
                <Header />
                <Illustration />
            </div>
            <div className="container">
                <Statistic />
                <div id="books">
                    <div className="course-online  d-flex justify-content-center">
                        <h1 style={{ color: "#413960" }}>online books</h1>
                    </div>
                    <div className="">
                        <div className="row">
                            {
                                books.length ? <div className="card-deck">
                                    {
                                        books.map(book => <Books key={book._id} books={book} />)
                                    }
                                </div>
                                    :
                            <img src="https://i.pinimg.com/originals/06/bd/f8/06bdf8ad69ff62062ae7dceb250d8866.gif" alt="" />
                            }

                        </div>
                    </div>
                </div>

                <Testimonial />
            </div>
            <Footer />
        </div>
    );
};
export default Home;