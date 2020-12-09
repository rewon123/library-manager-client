import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory, Link } from 'react-router-dom';
import { UserContext } from '../../App';


const BookDetail = () => {

    const { id } = useParams()
    const [book, setBook] = useState({})
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch(`https://library-management-rewon.herokuapp.com/bookDetail/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [id])

    const onSubmit = data => {
        console.log('form submitted', data)

        const allData = { ...loggedInUser, data, forDashboard: book }
        fetch('https://library-management-rewon.herokuapp.com/AddRegistration', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('order placed successfully')
                    history.push('/DashBoard')
                }
            })
    };
    return (
        <div style={{ marginTop: '50px' }}>
            <div className='d-flex justify-content-center' >
                <Link to='/'> <img src='https://rewon123.github.io/school-assigment/images/ICON/Logo.png' style={{
                    width: '202.81px',
                    height: '60px'
                }} alt="" />
                </Link>
            </div>
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='center-alignment' style={{ marginTop: '30px' }}>
                        <label style={{ fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Register a book</label>
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input name="Username" ref={register({ required: true })} className="input-field" type="text" defaultValue={loggedInUser.name || loggedInUser.displayName} placeholder="Full name" />
                            <br />
                            <input type="email" name="email" ref={register({ required: true })} className="input-field" defaultValue={loggedInUser.email} placeholder="User name or email" required />
                            <br />
                            <input type="releaseDate" name="releaseDate" ref={register({ required: true })} className="input-field" defaultValue={book.releaseDate} required />
                            <br />
                            <input type="author" ref={register({ required: true })} name="author" defaultValue={book.author} className="input-field" placeholder="author" />
                            <br />
                            <input name="bookName" ref={register({ required: true })} type="bookName" className="input-field" defaultValue={book.bookName} />
                            <br />
                            <button className="btn btn-primary mt-2" type="submit">Borrow Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;