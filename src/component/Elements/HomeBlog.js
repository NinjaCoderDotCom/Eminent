import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import pic1 from './../../assets/images/blog/homeGrid/pic1.jpg'
import pic2 from './../../assets/images/blog/homeGrid/pic2.jpg'
import { Button } from 'reactstrap';

const aboutBlog = [
    {
        image: pic1,
        date: 'September 10, 2017',
        comment: '5k',
        title: '1',

    },
    {
        image: pic2,
        date: 'September 10, 2017',
        comment: '5k',
        title: '2',

    },
    {
        image: pic1,
        date: 'September 10, 2017',
        comment: '5k',
        title: '3',

    },
    {
        image: pic2,
        date: 'September 10, 2017',
        comment: '5k',
        title: '4',

    },
]

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="la la-angle-right nav-right" onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="la la-angle-left nav-left" onClick={onClick} />
    );
}

class HomeBlog extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 3,
            infinite: true,
            autoplay: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        return (
            <div>
                <div className="content-block">
                    <div className="content-inner-2 overlay-white-middle">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="text-uppercase m-b0">Our Gallery</h2>
                            </div>
                            <Slider className="blog-carousel nav-btn-center-lr btn-1" {...settings}>
                                {aboutBlog.map((item, index) => (
                                    <div className="item p-3" key={index}>
                                        <div className="blog-post blog-grid blog-style-1">
                                            <div className="dlab-post-media dlab-img-effect radius-sm">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="dlab-info">
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">{item.date}</li>
                                                        <li className="post-comment">{item.comment}</li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title ">
                                                    <h5 className="post-title font-20">{item.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="text-center">
                                <Link to={'/gallery'}><Button outline color="info" size="lg">See More</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeBlog;