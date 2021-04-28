import React, { Component } from 'react';
import Header from '../Elements/Header';
import Slider from '../Elements/Slider';
import sample from '../../assets/images/sample.jpg';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../Elements/Footer';
import Quotes from '../Elements/QuotesFetcher';
import HomeBlog from '../Elements/HomeBlog';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <div className="content-block">
                    <div className="section-full content-inner overlay-white-middle">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="text-uppercase m-b0">Just Why<span className="text-color">Eminent</span></h2>
                            </div>
                            <div className="row align-items-start m-b20">
                                <div className="col-md-12 col-lg-6">
                                    <img src={sample} alt="SAmple" />
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is.
                                    </p>
                                    <Link to={'/about'}><Button outline color="info" size="lg">Know More</Button></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-bar-chart text-primary"></i>
                                            <span className="counter">3</span>
                                        </div>
                                        <span className="counter-text">Years Completed</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-user text-primary"></i>
                                            <span className="counter">1500</span>
                                        </div>
                                        <span className="counter-text">Happy Students</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-headphone-alt text-primary"></i>
                                            <span className="counter">3569+</span>
                                        </div>
                                        <span className="counter-text">Classes Held</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6 m-b30">
                                    <div className="counter-style-1">
                                        <div className="">
                                            <i className="icon ti-cup text-primary"></i>
                                            <span className="counter">3</span>
                                        </div>
                                        <span className="counter-text">Centers Opened</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Quotes />
                <HomeBlog />
                <Footer />
            </div>
        )
    }
}

export default Home;