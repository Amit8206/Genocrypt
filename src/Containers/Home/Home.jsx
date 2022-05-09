import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'


const Home = (props) => {

    
    return (
        <Layout>
            <div className="sidebar__area">
                <div className="sidebar__wrapper">
                    <div className="sidebar__close"><button className="sidebar__close-btn" id="sidebar__close-btn"><span><i className="fal fa-times"></i></span><span>close</span></button></div>
                    <div className="sidebar__content">
                        <div className="logo mb-40">
                            <a href="/"> <img src="./img/logo/logo.png" alt="logo" /></a>
                        </div>
                        <div className="mobile-menu"></div>
                        <div className="sidebar__info mt-350"><a className="w-btn w-btn-4 d-block mb-15 mt-15" href="/#">login</a><a className="w-btn d-block" href="/#">sign up</a></div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>
            <section className="hero__area hero__height p-relative d-flex align-items-center" style={{ backgroundImage: "url(./img/hero/home-1/hero-bg.jpg)" }}>
                <div className="hero__shape"><img className="hero-circle-1" src="./img/icon/hero/home-1/circle-1.png" alt="" /><img className="hero-circle-2" src="/img/icon/hero/home-1/circle-2.png" alt="" /><img className="hero-triangle-1" src="/img/icon/hero/home-1/triangle-1.png" alt="" /><img
                    className="hero-triangle-2" src="./img/icon/hero/home-1/triangle-2.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 col-lg-6">
                            <div className="hero__content pr-80">
                                <h2 className="hero__title wow fadeInUp" data-wow-delay=".3s">Creative Saas Design Software.</h2>
                                <p className="wow fadeInUp" data-wow-delay=".5s">Unify your team’s video creation process under one repository to create, collaborat scale.</p>
                                <div className="hero__search wow fadeInUp" data-wow-delay=".7s">
                                    <form action="#"><input type="email" placeholder="Enter your email.." /><button type="submit" className="w-btn w-btn-2">search</button></form>
                                    <div className="hero__search-info"><span> <i className="fal fa-check"></i> No software to install</span><span> <i className="fal fa-check"></i> No credit card required</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6">
                            <div className="hero__thumb text-end ml-220">
                                <div className="hero__thumb-wrapper p-relative "><img className="hero-circle" src="./img/hero/home-1/hero-circle.png" alt="" />
                                    <div className="hero__thumb-shape shape-1"><img src="./img/hero/home-1/hero-1.png" alt="" /></div>
                                    <div className="hero__thumb-shape shape-2"><img src="./img/hero/home-1/hero-2.png" alt="" /></div>
                                    <div className="hero__thumb-shape shape-3"><img src="./img/hero/home-1/hero-3.png" alt="" /></div>
                                    <div className="hero__thumb-shape shape-4"><img src="./img/hero/home-1/hero-4.png" alt="" /></div>
                                    <div className="hero__thumb-shape shape-5"><img src="./img/hero/home-1/hero-5.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services__area p-relative pt-150 pb-130">
                <div className="services__shape"><img className="services-circle-1" src="/img/icon/services/home-1/circle-1.png" alt="" /><img className="services-circle-2" src="/img/icon/services/home-1/circle-2.png" alt="" /><img className="services-dot" src="/img/icon/services/home-1/dot.png" alt=""
                /><img className="services-triangle" src="/img/icon/services/home-1/triangle.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-6 col-md-10 offset-md-1 p-0">
                            <div className="section__title-wrapper text-center mb-75 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section__title">Get Answers, Insights Result in Simple Steps.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="services__inner hover__active mb-30 wow fadeInUp " data-wow-delay=".3s">
                                <div className="services__item white-bg text-center transition-3 ">
                                    <div className="services__icon mb-25 d-flex align-items-end justify-content-center"><img src="/img/icon/services/home-1/services-1.png" alt="" /></div>
                                    <div className="services__content">
                                        <h3 className="services__title"><a href="/services-details">Development</a></h3>
                                        <p>Absolutely bladdered he blimey guvnor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="services__inner hover__active mb-30 wow fadeInUp active" data-wow-delay=".5s">
                                <div className="services__item white-bg mb-30 text-center transition-3">
                                    <div className="services__icon mb-25 d-flex align-items-end justify-content-center"><img src="/img/icon/services/home-1/services-2.png" alt="" /></div>
                                    <div className="services__content">
                                        <h3 className="services__title"><a href="/services-details">OptimalSort</a></h3>
                                        <p>Absolutely bladdered he blimey guvnor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="services__inner hover__active mb-30 wow fadeInUp " data-wow-delay=".7s">
                                <div className="services__item white-bg text-center transition-3">
                                    <div className="services__icon mb-25 d-flex align-items-end justify-content-center"><img src="/img/icon/services/home-1/services-3.png" alt="" /></div>
                                    <div className="services__content">
                                        <h3 className="services__title"><a href="/services-details">Influencing</a></h3>
                                        <p>Absolutely bladdered he blimey guvnor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="services__inner hover__active mb-30 wow fadeInUp " data-wow-delay=".9s">
                                <div className="services__item white-bg text-center transition-3">
                                    <div className="services__icon mb-25 d-flex align-items-end justify-content-center"><img src="/img/icon/services/home-1/services-4.png" alt="" /></div>
                                    <div className="services__content">
                                        <h3 className="services__title"><a href="/services-details">Technology</a></h3>
                                        <p>Absolutely bladdered he blimey guvnor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about__area pb-120 p-relative">
                <div className="about__shape"><img className="about-triangle" src="/img/icon/about/home-1/triangle.png" alt="" /><img className="about-circle" src="/img/icon/about/home-1/circle.png" alt="" /><img className="about-circle-2" src="/img/icon/about/home-1/circle-2.png" alt="" /><img className="about-circle-3"
                    src="/img/icon/about/home-1/circle-3.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9">
                            <div className="about__wrapper mb-10">
                                <div className="section__title-wrapper mb-25">
                                    <h2 className="section__title">Get the Perfect Solution for Your Web.</h2>
                                    <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard guvnor gosh cras brilliant.</p>
                                </div>
                                <ul>
                                    <li>Intergate With Popular Softwares item</li>
                                    <li>Instantly Create Your Crowdfunding Platform</li>
                                </ul><a className="w-btn w-btn-3 w-btn-1" href="/contact">Get Started</a></div>
                        </div>
                        <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-10 order-first order-lg-last">
                            <div className="about__thumb-wrapper p-relative ml-40 fix text-end"><img src="/img/about/home-1/about-bg.png" alt="" />
                                <div className="about__thumb p-absolute"><img className="bounceInUp wow about-big" data-wow-delay=".3s" src="/img/about/home-1/about-1.png" alt="" /><img className="about-sm" src="/img/about/home-1/about-1-1.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about__area pb-160 pt-80 p-relative">
                <div className="about__shape"><img className="about-plus" src="./img/icon/about/home-1/plus.png" alt="" /><img className="about-triangle-2" src="/img/icon/about/home-1/triangle-2.png" alt="" /><img className="about-circle-4" src="/img/icon/about/home-1/circle-4.png" alt="" /><img className="about-circle-5"
                    src="./img/icon/about/home-1/circle-5.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about__thumb-wrapper p-relative ml--30 fix mr-70"><img src="/img/about/home-1/about-bg-2.png" alt="" />
                                <div className="about__thumb about__thumb-2 p-absolute wow fadeInUp" data-wow-delay=".3s"><img className="about-big bounceInUp wow" data-wow-delay=".5s" src="/img/about/home-1/about-2.png" alt="" /><img className="about-sm about-sm-2" src="/img/about/home-1/about-2-1.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-9">
                            <div className="about__wrapper about__wrapper-2 ml-60 mb-30">
                                <div className="section__title-wrapper mb-25">
                                    <h2 className="section__title">Awesome Prototyping Tool for UI/UX.</h2>
                                    <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard guvnor gosh cras brilliant.</p>
                                </div>
                                <ul>
                                    <li>Intergate With Popular Softwares item</li>
                                    <li>Instantly Create Your Crowdfunding Platform</li>
                                </ul><a className="w-btn w-btn-3 w-btn-1" href="/contact">Get Started</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="price__area grey-bg pt-105 pb-90">
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row">
                        <div className="col-xxl-7 col-xl-7 col-lg-8">
                            <div className="section__title-wrapper mb-65 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section__title">Software is Easy Prototyping about on the web.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="price__item white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".3s">
                                <div className="price__offer mb-15"><span>Free</span></div>
                                <div className="price__tag mb-15">
                                    <h3>$00</h3>
                                </div>
                                <div className="price__text mb-25">
                                    <p>Start for free pick a plan later,You can cancel any time.</p>
                                </div>
                                <div className="price__features mb-40">
                                    <ul>
                                        <li>1GB Cloud Storage</li>
                                        <li>Share on Cloud</li>
                                        <li>Private &amp; Team Folders</li>
                                    </ul>
                                </div><a className="w-btn w-btn-4 w-100 price__btn" href="/contact">Try for free</a></div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="price__item hover__active active white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".5s">
                                <div className="price__offer mb-15"><span>Basic</span></div>
                                <div className="price__tag mb-15">
                                    <h3>$495<span>Monthly</span></h3>
                                </div>
                                <div className="price__text mb-25">
                                    <p>Start for free pick a plan later,You can cancel any time.</p>
                                </div>
                                <div className="price__features mb-40">
                                    <ul>
                                        <li>Private &amp; Team Folders</li>
                                        <li>Comments</li>
                                        <li>Embed Share Link</li>
                                        <li>Print to PDF</li>
                                    </ul>
                                </div><a className="w-btn w-btn-4 w-100 price__btn" href="/contact">Try for free</a></div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="price__item white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".6s">
                                <div className="price__offer mb-15"><span>Enterprise</span></div>
                                <div className="price__tag mb-15">
                                    <h3>$837<span>Yearly</span></h3>
                                </div>
                                <div className="price__text mb-25">
                                    <p>Start for free pick a plan later,You can cancel any time.</p>
                                </div>
                                <div className="price__features mb-40">
                                    <ul>
                                        <li>Private &amp; Team Folders</li>
                                        <li>Comments</li>
                                        <li>Embed Share Link</li>
                                        <li>Print to PDF</li>
                                        <li>Export to PNG</li>
                                    </ul>
                                </div><a className="w-btn w-btn-4 w-100 price__btn" href="/contact">Try for free</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial__area pt-150 pb-70 p-relative overflow-y-visible">
                <div className="circle-animation testimonial"><span></span></div>
                <div className="testimonial__shape"><img className="testimonial-circle-1" src="/img/icon/testimonial/home-1/circle-1.png" alt="" /><img className="testimonial-circle-2" src="/img/icon/testimonial/home-1/circle-2.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section__title-wrapper text-center section-padding mb-65 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section__title">What People Say About Our Products.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="slick-slider testimonial__slider owl-carousel wow fadeInUp slick-initialized" dir="ltr"><button type="button" data-role="none" className="slick-arrow slick-prev" style={{ display: "block" }}>Previous</button>
                                <div className="slick-list">
                                    <div className="slick-track" style={{ width: "700%", left: "-100%" }}>
                                        <div data-index="-2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-3.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Victor </h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-4.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Lily Gomz</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="./img/testimonial/home-1/testi-5.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Shinna</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="1" className="slick-slide slick-active" tabIndex="-1" aria-hidden="false" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="./img/testimonial/home-1/testi-6.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Steve Smith</h3><span>Designer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="2" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-1.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Hilary Ouse</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="3" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-2.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Elon Gated</h3><span>Designer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="4" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-3.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Victor </h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="5" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: "none", width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-4.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Lily Gomz</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="6" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-5.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Shinna</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="7" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-6.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Steve Smith</h3><span>Designer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="8" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-1.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Hilary Ouse</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="9" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-2.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Elon Gated</h3><span>Designer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-3.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Victor </h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: "7.142857142857143%" }}>
                                            <div>
                                                <div className="testimonial__item white-bg transition-3 mb-110" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
                                                    <div className="testimonial__thumb mb-25"><img src="/img/testimonial/home-1/testi-4.png" alt="" /></div>
                                                    <div className="testimonial__text mb-25">
                                                        <p>Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. </p>
                                                    </div>
                                                    <div className="testimonial__author">
                                                        <h3>Lily Gomz</h3><span>Developer</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><button type="button" data-role="none" className="slick-arrow slick-next" style={{ display: "block" }}>Next</button>
                                <ul style={{ display: "block" }} className="slick-dots">
                                    <li className="slick-active"><button>1</button></li>
                                    <li className=""><button>2</button></li>
                                    <li className=""><button>3</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features__area pt-60 pb-155 p-relative overflow-y-visible">
                <div className="circle-animation features"><span></span></div>
                <div className="features__shape"><img className="features-circle-1" src="/img/icon/features/home-1/circle-1.png" alt="" /></div>
                <div className="container" style={{ maxWidth: '1760px' }}>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="section__title-wrapper mb-65 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section__title">Software is Easy Prototyping Features.</h2>
                                <p>Over the last few years, podcasts have become a role in the online landscape.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".3s">
                                <div className="features__icon mb-35"><span className="gradient-pink"><i className="far fa-heart-rate"></i></span></div>
                                <h3 className="features__title">API management</h3>
                                <div className="features__list">
                                    <ul>
                                        <li>Secure Access</li>
                                        <li>Connectivity</li>
                                        <li>Engagement</li>
                                        <li>Secure Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features__item mb-30 wow fadeInUp pl-15" data-wow-delay=".5s">
                                <div className="features__icon mb-35"><span className="gradient-blue"><i className="fal fa-chart-pie-alt"></i></span></div>
                                <h3 className="features__title">Scheduled Reports</h3>
                                <div className="features__list">
                                    <ul>
                                        <li>Publish anywhere </li>
                                        <li>Influencer</li>
                                        <li>Content Creation</li>
                                        <li>Prepare your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features__item mb-30 wow fadeInUp pl-45" data-wow-delay=".7s">
                                <div className="features__icon mb-35"><span className="gradient-yellow"><i className="fal fa-tag"></i></span></div>
                                <h3 className="features__title">Compliance Controls</h3>
                                <div className="features__list">
                                    <ul>
                                        <li>Animations</li>
                                        <li>3D Viewer</li>
                                        <li>Creation</li>
                                        <li>Packaging Designer </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 d-lg-flex justify-content-end">
                            <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".9s">
                                <div className="features__icon mb-35"><span className="gradient-purple"><i className="fal fa-layer-group"></i></span></div>
                                <h3 className="features__title">Authentication</h3>
                                <div className="features__list">
                                    <ul>
                                        <li>Print Templates</li>
                                        <li>Mockups</li>
                                        <li>Statement</li>
                                        <li>Recruitment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="features__more text-center mt-50"><a className="w-btn w-btn-6 w-btn-5" href="/services">View all Features</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta__area mb--149 p-relative">
                <div className="circle-animation cta-1"><span></span></div>
                <div className="circle-animation cta-1 cta-2"><span></span></div>
                <div className="circle-animation cta-3"><span></span></div>
                <div className="container">
                    <div className="cta__inner p-relative fix z-index-1 wow fadeInUp" data-wow-delay=".5s">
                        <div className="cta__shape"><img className="circle" src="/img/cta/home-1/cta-circle.png" alt="" /><img className="circle-2" src="/img/cta/home-1/cta-circle-2.png" alt="" /><img className="circle-3" src="/img/cta/home-1/cta-circle-3.png" alt="" /><img className="triangle-1" src="/img/cta/home-1/cta-triangle.png"
                            alt="" /><img className="triangle-2" src="/img/cta/home-1/cta-triangle-2.png" alt="" /></div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="cta__wrapper d-lg-flex justify-content-between align-items-center">
                                    <div className="cta__content">
                                        <h3 className="cta__title">Make Your Own Website <br /> Get Started with Theme Pure</h3>
                                    </div>
                                    <div className="cta__btn"><a className="w-btn w-btn-white" href="/contact">Try for Free</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home