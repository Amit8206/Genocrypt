import React from 'react'

const Contact = (props) => {
    return (
        <>

            <div className="sidebar__area">
                <div className="sidebar__wrapper">
                    <div className="sidebar__close"><button className="sidebar__close-btn" id="sidebar__close-btn"><span><i
                        className="fal fa-times"></i></span><span>close</span></button></div>
                    <div className="sidebar__content">
                        <div className="logo mb-40"><a href="/"><img src="/img/logo/logo.png" alt="logo" /></a></div>
                        <div className="mobile-menu"></div>
                        <div className="sidebar__info mt-350"><a className="w-btn w-btn-4 d-block mb-15 mt-15"
                            href="/contact#">login</a><a className="w-btn d-block" href="/contact#">sign up</a></div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>
            {/* <section className="page__title-area page__title-height d-flex align-items-center fix p-relative z-index-1"
                style={{
                    background: "url(&quot;/img/page-title/page-title.jpg&quot;)}}">
                        <div className="page__title-shape">
                            <img className="page-title-dot-4" src="/img/page-title/dot-4.png" alt="" />
                            <img className="page-title-dot" src="/img/page-title/dot.png" alt="" />
                            <img className="page-title-dot-2" src="/img/page-title/dot-2.png" alt="" />
                            <img className="page-title-dot-3" src="/img/page-title/dot-3.png" alt="" />
                            <img className="page-title-plus" src="/img/page-title/plus.png" alt="" >
                                <img className="page-title-triangle" src="/img/page-title/triangle.png" alt="" >

                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="page__title-wrapper text-center">
                                                <h3>Contact </h3>
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb justify-content-center">
                                                        <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section> */}

        </>
    )
}



export default Contact