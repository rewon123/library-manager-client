import React, { useState, useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import SideBar from '../../Components/SideBar/SideBar';
import { UserContext } from '../../App';


const Librarian = () => {
    const [file, setFile] = useState(null);
    const [loggedInUser] = useContext(UserContext);

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch(`https://library-management-rewon.herokuapp.com/allAdmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('bookName', data.bookName);
        formData.append('author', data.author);
        formData.append('genre', data.genre);
        formData.append('releaseDate', data.releaseDate);
        fetch('https://library-management-rewon.herokuapp.com/addBook', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Data has been send')
                }
                // console.log(result);
            })
            .catch(err => console.log(err))
        console.log(data);
        // data.preventDefault();
    }
    // console.log(watch("example"))
    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} />
    return (

        <div className="">
            {
                admin.length ? <div className="d-flex container bg-light">
                    <div className="col-md-4">
                        <SideBar />
                    </div>
                    <div className="col-md-8">
                        <Form className="row px-4 p-4" onSubmit={handleSubmit(onSubmit)} >
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label-title">bookName : </label>
                                <Form.Control type="text" placeholder="Enter bookName" ref={register} name="bookName" required />
                                <label htmlFor="" className="form-label-title">author : </label>
                                <Form.Control type="text" placeholder="Enter author" ref={register} name="author" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label-title">genre : </label>
                                <Form.Control type="text" placeholder="genre" ref={register} name="genre" required />
                                <label htmlFor="" className="form-label-title">chosse releaseDate : </label>
                                <Form.Control type="date" placeholder="chosse releaseDate" ref={register} name="releaseDate" required />
                                <div className="">
                                    <div className="">
                                        <label htmlFor="" className="form-label-title">bookImage: </label>
                                        <br />
                                        <Form.File placeholder="Name" name="image" onChange={fileChange} ref={register({ required: true })} required accept="image/*" id="actual-btn" className="file-input" />
                                        <label htmlFor="actual-btn" className="btn btn-outline-success responsive-mobile-width">
                                            {uploadIcon} Upload <span className="responsive-file"> Image</span>
                                        </label>
                                        <span id="file-chosen"></span>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-12 ">
                                <Button variant="dark" type="submit" className="responsive-mobile-btn float-right">
                                    Submit
                    </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                    :
                    <h1> sorry you are not librarian</h1>
            }
        </div>

    );
};

export default Librarian;