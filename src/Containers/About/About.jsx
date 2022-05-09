import React from 'react'



const About = (props) => {


    return (
        <>

        {/* <div><h5>Welcome to Genocrypt About Page</h5></div> */}
            <section className="page__title-area page__title-height d-flex align-items-center fix p-relative z-index-1"
                style={{ backgroundImage: "url(./img/page-title/page-title.jpg)" }}>
                <div className="page__title-shape">
                    <img className="page-title-dot-4" src="/img/page-title/dot-4.png" alt="" />
                    <img className="page-title-dot" src="/img/page-title/dot.png" alt="" />
                    <img className="page-title-dot-2" src="/img/page-title/dot-2.png" alt="" />
                    <img className="page-title-dot-3" src="/img/page-title/dot-3.png" alt="" />
                    <img className="page-title-plus" src="/img/page-title/plus.png" alt="" />
                    <img className="page-title-triangle" src="/img/page-title/triangle.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-wrapper text-center">
                                <h3>About Us </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="services__area pt-110 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section__title-wrapper section__title-wrapper-4 text-center mb-65 wow fadeInUp"
                                data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s;">
                                <h2 className="section__title section__title-4 section__title-4-p-2">Marketing Strategy Service.
                                </h2>
                                <p>Get the word out and sell more with sleek email messages that.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s"
                            style="visibility: visible; animation-delay: 0.3s;">
                            <div className="services__item-4 white-bg mb-30">
                                <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                                    <img src="/img/services/home-4/services-1.png" alt="" /></div>
                                <div className="services__content-4">
                                    <h3 className="services__title-4"><a href="/services-details">Finish routine tasks
                                        automatically</a></h3>
                                    <p>I smashing, hanky panky chap plastered show off show off pick your nose plastered.
                                    </p><a className="link-btn" href="/services-details">Chat Platfrom <i
                                        className="arrow_right"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s"
                            style="visibility: visible; animation-delay: 0.5s;">
                            <div className="services__item-4 white-bg mb-30">
                                <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                                    <img src="/img/services/home-4/services-2.png" alt="" /></div>
                                <div className="services__content-4">
                                    <h3 className="services__title-4"><a href="/services-details">Start workflows from any
                                        app</a></h3>
                                    <p>I smashing, hanky panky chap plastered show off show off pick your nose plastered.
                                    </p><a className="link-btn" href="/services-details">Chat Platfrom <i
                                        className="arrow_right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about__area pb-45 pt-45 p-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9 order-last order-lg-first">
                            <div className="about__wrapper about__wrapper-2 mb-20">
                                <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s"
                                    style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                                    <h2 className="section__title">Awesome Prototyping Tool for UI/UX.</h2>
                                    <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard guvnor gosh cras
                                        brilliant.</p>
                                </div>
                                <ul className="wow fadeInUp" data-wow-delay=".5s"
                                    style="visibility: hidden; animation-delay: 0.5s; animation-name: none;">
                                    <li>Intergate With Popular Softwares item</li>
                                    <li>Instantly Create Your Crowdfunding Platform</li>
                                </ul><a className="w-btn w-btn-3 w-btn-1" href="/contact">Get Started</a>
                            </div>
                        </div>
                        <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay=".7s"
                            style="visibility: hidden; animation-delay: 0.7s; animation-name: none;">
                            <div className="about__thumb-wrapper-2 ml-40 p-relative m-img">
                                <img src="/img/about/about-img.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq__area pt-75 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="faq__wrapper wow fadeInUp" data-wow-delay="0.3s"
                                style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne"><button className="accordion-button ">
                                            What to do if you can’t access ?
                                        </button></h2>
                                        <div className="accordion-collapse  collapse show">
                                            <div className="card-body" data-wow-delay=".3s">
                                                <p className="m-b0">Looking to start an online store and youre not sure where to
                                                    begin? I guide will help you to navigate Would you like to boost your
                                                    Twitter profile.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne"><button
                                            className="accordion-button collapsed">
                                            How to start an online store in 2021 ?
                                        </button></h2>
                                        <div className="accordion-collapse collapse">
                                            <div className="card-body" data-wow-delay=".3s">
                                                <p className="m-b0">Looking to start an online store and youre not sure where to
                                                    begin? I guide will help you to navigate Would you like to boost your
                                                    Twitter profile.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne"><button
                                            className="accordion-button collapsed">
                                            How to change font size in wordPress ?
                                        </button></h2>
                                        <div className="accordion-collapse collapse">
                                            <div className="card-body" data-wow-delay=".3s">
                                                <p className="m-b0">Looking to start an online store and youre not sure where to
                                                    begin? I guide will help you to navigate Would you like to boost your
                                                    Twitter profile.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
                            <div className="faq__content">
                                <div className="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp"
                                    data-wow-delay=".3s"
                                    style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                                    <h2 className="section__title section__title-2">Loved and trusted by over 40k+ users!</h2>
                                    <p>Over the last few years, podcasts have become a huge deal. They’ve taken on a growing
                                        role.</p>
                                </div>
                                <div className="faq__counter wow fadeInUp" data-wow-delay=".5s"
                                    style="visibility: hidden; animation-delay: 0.5s; animation-name: none;">
                                    <ul>
                                        <li>
                                            <h3 className="pink"><span className="counter"><span>876</span></span></h3>
                                            <p>Happy Clients</p>
                                        </li>
                                        <li>
                                            <h3 className="blue"><span className="counter"><span>156</span></span></h3>
                                            <p>Projects</p>
                                        </li>
                                        <li>
                                            <h3 className="yellow"><span className="counter"><span>430</span></span></h3>
                                            <p>Trusted Users</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="promotion__area promotion__bg pt-125 pb-125 p-relative">
                <div className="promotion__shape"><img className="promotion-dot" src="/img/icon/promotion/pro-dot.png" alt="" /><img
                    className="promotion-plus" src="/img/icon/promotion/pro-plus.png" alt="" /><img className="promotion-triangle"
                        src="/img/icon/promotion/pro-triangle.png" alt="" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="promotion__content wow fadeInUp" data-wow-delay=".3s"
                                style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                                <h3 className="promotion__title">Product goals? <br /> Let's make them happen.</h3>
                                <p>They’ve taken on a growing role Over the last few year.</p><a className="w-btn w-btn-8"
                                    href="/about">read more</a>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="promotion__content pl-70 promotion__right wow fadeInUp" data-wow-delay=".5s"
                                style="visibility: hidden; animation-delay: 0.5s; animation-name: none;">
                                <h3 className="promotion__title">Looking for enterprise <br /> solution.</h3>
                                <p>They’ve taken on a growing role Over the last few year.</p><a className="w-btn w-btn-8"
                                    href="/about">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default About