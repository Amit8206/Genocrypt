import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../Actions/UserAction'
import Layout from '../../Components/Layout/Layout'


const SignUp = (props) => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        }
        console.log({ user })
        dispatch(signup(user));
    }



    if (auth.authenticate) {
        return (<Navigate to='/' />)
    }
    // if (user.loading) {
    //     return (<p>Loading....</p>)
    // }


    return (
        <Layout>
            <section class="signup__area po-rel-z1 pt-100 pb-145">
                <div class="sign__shape">
                    <img class="man-1" src="/img/icon/sign/man-3.png" alt="" />
                    <img class="man-2 man-22" src="/img/icon/sign/man-2.png" alt="" />
                    <img class="circle" src="/img/icon/sign/circle.png" alt="" />
                    <img class="zigzag" src="/img/icon/sign/zigzag.png" alt="" />
                    <img class="dot" src="/img/icon/sign/dot.png" alt="" />
                    <img class="bg" src="/img/icon/sign/sign-up.png" alt="" />
                    <img class="flower" src="/img/icon/sign/flower.png" alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div class="page__title-wrapper text-center mb-55">
                                <h2 class="page__title-2">Create a free <br /> Account</h2>
                                <p>I'm a subhead that goes with a story.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div class="sign__wrapper white-bg">
                                <div class="sign__header mb-35">
                                    <div class="sign__in text-center">
                                        <a class="sign__social g-plus text-start mb-15" href="/sign-up#">
                                            <i class="fab fa-google-plus-g"></i>Sign Up with Google</a>
                                        <p> <span>........</span> Or,
                                            <a href="/sign-up">sign up</a> with your email<span> ........</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="sign__form">
                                    <form action="" onSubmit={userSignup}>
                                        <div class="sign__input-wrapper mb-25">
                                            <h5>First Name</h5>
                                            <div class="sign__input">
                                                <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                                <i class="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div class="sign__input-wrapper mb-25">
                                            <h5>Last Name</h5>
                                            <div class="sign__input">
                                                <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                                <i class="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div class="sign__input-wrapper mb-25">

                                            <h5>Work email</h5>
                                            <div class="sign__input">
                                                <input type="email" placeholder="E-Mail address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <i class="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div class="sign__input-wrapper mb-25">
                                            <h5>Password</h5>
                                            <div class="sign__input">
                                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <i class="fal fa-lock"></i>
                                            </div>
                                        </div>
                                        {/* <div class="sign__input-wrapper mb-10">
                                        <h5>Re-Password</h5>
                                        <div class="sign__input">
                                            <input type="password" placeholder="Re-Password" />
                                            <i class="fal fa-lock"></i>
                                        </div>
                                    </div> */}
                                        <div class="sign__action d-flex justify-content-between mb-30">
                                            <div class="sign__agree d-flex align-items-center">
                                                <input class="m-check-input" type="checkbox" id="m-agree" />
                                                <label class="m-check-label" for="m-agree">I agree to the
                                                    <a href="#">Terms &amp; Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button class="w-btn w-btn-11 w-100" > <span></span>Sign Up</button>
                                        <div class="sign__new text-center mt-20">
                                            <p>Already in Markit ?
                                                <a href="/signin"> Sign In</a>
                                            </p>
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

export default SignUp;