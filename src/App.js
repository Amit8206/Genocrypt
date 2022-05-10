import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import SignIn from './Containers/SignIn/SignIn';
import SignUp from './Containers/SignUp/SignUp';
import { useEffect } from 'react';
import { isUserLoggedIn } from './Actions'
import { useDispatch, useSelector } from 'react-redux';
import About from './Containers/About/About';
import PrivateRoute from './Components/HOC/PrivateRoute';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Containers/Contact/Contact';


function App() {

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<PrivateRoute />} > */}
          <Route exact path='/' element={<Home />} />
        {/* </Route> */}
        {/* <Route exact path='/home2' element={<Home2 />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
