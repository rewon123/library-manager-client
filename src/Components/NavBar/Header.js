import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../../Pages/Login/LoginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {
            history.push('/')
        }
    }

    return (
        <div>
            <div className="container" id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src="https://rewon123.github.io/school-assigment/images/ICON/Logo.png" className="w-25" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" style={{ textDecoration: 'none' }}> <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            </li>


                            <li className="nav-item">
                                <Link to="/books" style={{ textDecoration: 'none' }}>   <a className="nav-link" href="#">Books</a></Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/DashBoard" style={{ textDecoration: 'none' }}>   <a className="nav-link" href="#">DashBoard</a></Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/librarian" style={{ textDecoration: 'none' }}><p className="nav-link">librarian</p></Link>
                            </li>


                            {
                                loggedInUser.email ?
                                    <li className="nav-item">
                                        <button className="sign-btn" onClick={signOut}>Sign out</button>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link to="/login" style={{ textDecoration: 'none' }}> <button className="sign-btn">Sign In</button></Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;