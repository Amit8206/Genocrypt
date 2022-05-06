import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { login } from '../../Actions'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';



const SignIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();




  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    }
    console.log({ user })
    dispatch(login(user));
  }

  if (auth.authenticate) {
    return (<Navigate to='/' />)
    //   navigate('/')
  }



  return (
    <Layout>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="./img/icon/sign/man-1.png" alt="" />
          <img className="man-2" src="./img/icon/sign/man-2.png" alt="" />
          <img className="circle" src="./img/icon/sign/circle.png" alt="" />
          <img className="zigzag" src="./img/icon/sign/zigzag.png" alt="" />
          <img className="dot" src="./img/icon/sign/dot.png" alt="" />
          <img className="bg" src="./img/icon/sign/sign-up.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="page__title-wrapper text-center mb-55">
                <h2 className="page__title-2">Sign in to <br />  recharge direct.</h2>
                <p>it you don't have an account you can
                  <a href="/signin">Register here!</a></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="sign__wrapper white-bg">
                <div className="sign__header mb-35">
                  <div className="sign__in text-center">
                    <a className="sign__social text-start mb-15" href="/sign-in#">
                      <i className="fab fa-facebook-f"></i>Sign in with Facebook</a>
                    <p> <span>........</span> Or, <a href="/signin">sign in</a> with your email<span> ........</span> </p>
                  </div>
                </div>
                <div className="sign__form">
                  <form action="#" onSubmit={userLogin}>
                    <div className="sign__input-wrapper mb-25">
                      <h5>Work email</h5>
                      <div className="sign__input">
                        <input type="email" placeholder="e-mail address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <i className="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-10">
                      <h5>Password</h5>
                      <div className="sign__input">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <i className="fal fa-lock"></i></div>
                    </div>
                    <div className="sign__action d-sm-flex justify-content-between mb-30">
                      <div className="sign__agree d-flex align-items-center">
                        <input className="m-check-input" type="checkbox" id="m-agree" />
                        <label className="m-check-label" for="m-agree">Keep me signed in</label>
                      </div>
                      <div className="sign__forgot">
                        <a href="#">Forgot your password?</a>
                      </div>
                    </div>
                    <button className="w-btn w-btn-11 w-100"> <span></span> Sign In</button>
                    <div className="sign__new text-center mt-20">
                      <p>New to Markit? <a href="/signup">Sign Up</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SignIn






