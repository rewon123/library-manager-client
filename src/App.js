import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Homepage/Home';
import Login from './Pages/Login/Login';
import { createContext, useState } from 'react';
import Librarian from './Pages/librarian/Librarian';
import Header from './Components/NavBar/Header';
import BookDetail from './Pages/BookDetail/BookDetail';
import DashBoard from './Pages/UserDashBoard/DashBoard'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>

      <Router>
        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/bookDetail/:id">
            <BookDetail />
          </PrivateRoute>

          <PrivateRoute exact path="/DashBoard">
            <DashBoard />
          </PrivateRoute>

          <PrivateRoute exact path="/librarian">
            <Header />
            <Librarian />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="*">
            <h1>this page is still in development</h1>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
