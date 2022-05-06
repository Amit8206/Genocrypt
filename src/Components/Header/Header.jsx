import React, { useEffect } from 'react'
import { authConstants } from '../../Actions/Constants'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signout } from '../../Actions'





const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');

    const logout = () => {
        dispatch(signout());
    }


    const renderLogedInLinks = () => {
        return (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="header__right text-end d-flex align-items-center justify-content-end">
                    <div className="header__right-btn d-none d-md-flex align-items-center">
                        <a className="w-btn ml-45" style={{ cursor: 'pointer' }} onClick={logout}>Logout !</a>
                    </div>
                </div>
            </div>
        )
    }

    const renderNonLoggedInLinks = () => {
        return (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="header__right text-end d-flex align-items-center justify-content-end">
                    <div className="header__right-btn d-none d-md-flex align-items-center"><a className="header__btn" href="/signin">login</a><a className="w-btn ml-45" href="/signup">sign up</a></div>
                    <div className="sidebar__menu d-lg-none">
                        <div className="sidebar-toggle-btn" id="sidebar-toggle"><span className="line"></span><span className="line"></span><span className="line"></span></div>
                    </div>
                </div>
            </div>
        )
    }




    // if (!auth.authenticate) {
    //     // navigate('/')
    //     return ( <Navigate to='/' /> )
    //   }

    // useEffect(() => {
    //   if (!auth.authenticate) {
    //     // navigate('/')
    //     return ( <Navigate to='/' /> )
    //   }
    // }, [auth.authenticate])



    return (
        <header>
            <div id="header-sticky" className="header__area header__transparent header__padding ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                            <div className="logo"><a href="/"><img src="./img/logo/logo-fin4.png" alt="logo" /></a></div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li className="has-drop down"><a href="/">Home</a>
                                            {/* <ul className="submenu"> */}
                                            {/* <li><a href="/">Home 1</a></li> */}
                                            {/* <li><a href="/home2">Home 2</a></li>
                                                <li><a href="/index-3">Home 3</a></li>
                                                <li><a href="/index-4">Home 4</a></li>
                                                <li><a href="/index-5">Home 5</a></li> */}
                                            {/* </ul> */}
                                        </li>
                                        <li><a href="/about">About</a></li>
                                        <li className="has-drop down">
                                            <a href="/#">Services</a>
                                            {/* <ul className="submenu">
                                                <li><a href="/services">Services</a></li>
                                                <li><a href="/services-details">Services Details</a></li>
                                            </ul> */}
                                        </li>
                                        <li className="has-drop down"><a href="/#">Blog</a>
                                            {/* <ul className="submenu">
                                                <li><a href="/blog">Blog</a></li>
                                                <li><a href="/blog-standard">Blog Standard</a></li>
                                                <li><a href="/blog-details">Blog Details</a></li>
                                            </ul> */}
                                        </li>
                                        <li className="has-drop down"><a href="/#">Pages</a>
                                            {/* <ul className="submenu">
                                                <li><a href="/faq">Faq</a></li>
                                                <li><a href="/portfolio">Portfolio</a></li>
                                                <li><a href="/portfolio-details">Portfolio Details</a></li>
                                                <li><a href="/team">Team</a></li>
                                                <li><a href="/team-details">Team Details</a></li>
                                                <li><a href="/error">Error 404</a></li>
                                                <li><a href="/signup">Sign Up</a></li>
                                                <li><a href="/signin">Sign In</a></li>
                                            </ul> */}
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {auth.authenticate ? renderLogedInLinks() : renderNonLoggedInLinks()}


                        {/* <div className="sidebar__area">
                            <div className="sidebar__wrapper">
                                <div className="sidebar__close"><button className="sidebar__close-btn" id="sidebar__close-btn"><span><i className="fal fa-times"></i></span><span>close</span></button></div>
                                <div className="sidebar__content">
                                    <div className="logo mb-40"><a href="/"><img src="./img/logo/logo.png" alt="logo" /></a></div>
                                    <div className="mobile-menu mean-container">
                                        <nav className="mean-nav">
                                            <ul className="metismenu text-muted" id="metismenu">
                                                <li><a className="has-arrow" href="/#">Home</a>
                                                    <ul className="submenu">
                                                        <li><a href="/">Home 1</a></li>
                                                        <li><a href="/index-2">Home 2</a></li>
                                                        <li><a href="/index-3">Home 3</a></li>
                                                        <li><a href="/index-4">Home 4</a></li>
                                                        <li><a href="/index-5">Home 5</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/about">About</a></li>
                                                <li><a className="has-arrow" href="/#">Services</a>
                                                    <ul className="submenu">
                                                        <li><a href="/services">Services</a></li>
                                                        <li><a href="/services-details">Services Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="has-arrow" href="/#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="/blog">Blog</a></li>
                                                        <li><a href="/blog-standard">Blog Standard</a></li>
                                                        <li><a href="/blog-details">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="has-arrow" href="/#">Pages</a>
                                                    <ul className="submenu">
                                                        <li><a href="/faq">Faq</a></li>
                                                        <li><a href="/portfolio">Portfolio</a></li>
                                                        <li><a href="/portfolio-details">Portfolio Details</a></li>
                                                        <li><a href="/team">Team</a></li>
                                                        <li><a href="/team-details">Team Details</a></li>
                                                        <li><a href="/error">Error 404</a></li>
                                                        <li><a href="/signup">Sign Up</a></li>
                                                        <li><a href="/signin">Sign In</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/contact">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="sidebar__info mt-350"><a className="w-btn w-btn-4 d-block mb-15 mt-15" href="/signin">login</a><a className="w-btn d-block" href="/signup">sign up</a></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="body-overlay "></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header