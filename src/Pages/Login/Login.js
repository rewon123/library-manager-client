import React, { useContext, useState } from 'react';
import { handleGoogleSignIn, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './38870-google-logo-effect.gif'


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useContext(UserContext);
    initializeLoginFramework();


    const [pass, setPass] = useState();
    const [confPass, setConfPass] = useState();



    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {
            // history.push('/')

        }
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) {
                alert("Please enter correct email address!!!!");
            }
        }
        if (e.target.name === 'password') {
            setPass(e.target.value);
            const isPasswordValid = e.target.value.length > 6;
            isFieldValid = isPasswordValid;
            if (newUser) {
                if (!isPasswordValid) {
                    alert("Please enter minimum 6 character !!");
                }
            }

        }
        if (newUser) {
            if (e.target.name === 'confirmPassword') {
                setConfPass(e.target.value);
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {

        let pass_valid = false;
        if (newUser) {
            if (pass === confPass) {
                pass_valid = true;
            }
        } else {
            pass_valid = true;
        }

        if (pass_valid) {
            if (newUser && user.email && user.password) {
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)

                    })
            }
            if (!newUser && user.email && user.password) {
                signInWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)
                    })
            }
            e.preventDefault();
        } else {
            alert("password not matched");
            e.preventDefault();
        }
    }
    return (
        <div>
            <div className='center-alignment'>

                {newUser ? <label style={{ fontSize: '30px' }}>Create an account</label> : <label style={{ fontSize: '30px' }}>log in with your email & password</label>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input name="name" className="input-field" type="text" onBlur={handleBlur} placeholder="Your name" />}
                    <br />
                    <input type="text" name="email" className="input-field" onBlur={handleBlur} placeholder="Your Email address" required />
                    <br />
                    <input type="password" name="password" className="input-field" onBlur={handleBlur} placeholder="Your Password" required />
                    <br />
                    {newUser && <input name="confirmPassword" type="password" className="input-field" onBlur={handleBlur} placeholder="confirm Your Password" required />}
                    <br />
                    <input className="signUp-btn" type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
                <p>are you a new user? <span style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>sign up</span> </p>
            </div>
            <div className="social-signIn d-flex align-items-center" onClick={googleSignIn}> <img src={logo} style={{ width: '37px', height: '37px', margin: '10px' }} alt="" /> <p style={{ marginLeft: '100px' }}>sign in with Google</p> </div>

            <p style={{ color: 'red' }}>{user.error}</p>


            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
    );
};

export default Login;
