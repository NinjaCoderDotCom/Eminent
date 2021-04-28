import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer style1">
                {/* <div className="above-footer"/> */}
                <div className="footer-top">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 col-sm-5 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h6 className="m-b15 h6 text-uppercase">Eminent Tutorials</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <ul className="info-contact">
                                        <li>
                                            <i className="fa fa-map-marker"></i><strong>Our Centers</strong>
                                            <div className="dlab-separator bg-white"></div>
                                        </li>
                                        <li>
                                            <span>
                                                A-800/27, Shasti Nagar <br /> New Delhi, Delhi-110052
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                Karol Bagh <br /> New Delhi, Delhi-110005 (Upcoming)
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                3903/14, Kanhaiya Nagar <br /> New Delhi, Delhi-110035
                                            </span>

                                        </li>

                                        <li>
                                            <span>
                                                <i className="fa fa-phone"></i> <strong>Mobile:</strong>+91 946-282-5456
									        </span>
                                        </li>

                                        <li>
                                            <span>
                                                <i className="fa fa-envelope-o"></i> <strong>Mail:</strong>helo@kedartravels.com
									        </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7 footer-col-4">
                                <div className="widget  widget_tag_cloud">
                                    <h6 className="m-b15 h6 text-uppercase">Quick Links</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <div className="tagcloud">
                                        <Link to={''}>Class I</Link>
                                        <Link to={''}>Class II</Link>
                                        <Link to={''}>Class III</Link>
                                        <Link to={''}>Class IV</Link>
                                        <Link to={''}>Class V</Link>
                                        <Link to={''}>Class VI</Link>
                                        <Link to={''}>Class VII</Link>
                                        <Link to={''}>Class VIII</Link>
                                        <Link to={''}>Class IX</Link>
                                        <Link to={''}>Class X</Link>
                                        <Link to={''}>Class XI</Link>
                                        <Link to={''}>Class XII</Link>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="m-b15 h6 text-uppercase">Visit Us Here</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <ul className="list-inline">
                                        <li><a href="https://www.facebook.com/eminenttutorials1/" className="site-button facebook sharp" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/eminenttutorial/" className="site-button instagram sharp" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCPXgV4WC_OcYpEx8jHETDjg" className="site-button youtube sharp" target="_blank" rel="noreferrer noopener"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 text-left"> <span>Copyright © 2021 Eminent Tutorials</span> </div>
                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}
export default Footer;