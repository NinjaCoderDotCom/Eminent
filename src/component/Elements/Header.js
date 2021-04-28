import { React, Component } from 'react';
import Logo from '../../assets/images/Logo1.png';
// import Navbar from './Navbar/Navbar';
// import { FaAlignRight } from 'react-icons/fa';
// import data from '../../data/header.json'
import { Link } from 'react-router-dom';

class Header extends Component {

    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }
    render() {
        return (
            <header className="site-header mo-left header">
                <div className="sticky-header navbar-expand-lg ">
                    <div className="main-bar clearfix onepage">
                        <div className="container clearfix">
                            <button className="navbar-toggler collapsed navicon justify-content-center" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-center" id="navbarNavDropdown">
                                <ul className="nav">
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/about'}>Just Why Us</Link></li>
                                    <li><Link to={'/gallery'}>Gallery</Link></li>
                                </ul>

                                <div className="logo-header ">
                                    <Link to={'./'} ><img src={Logo} alt="logo" /></Link>
                                </div>

                                <ul className="nav">
                                    <li><Link to={'/classes'}>Classes<i className="fa fa-chevron-down"></i></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'/classes/primary'} className="dez-page">Primary (I-V)</Link></li>
                                            <li><Link to={'/classes/middle'} className="dez-page">Middle (VI-VIII)</Link></li>
                                            <li><Link to={'/classes/secondary'} className="dez-page">Senior (IX,X)</Link></li>
                                            <li><Link to={'/classes/senior-secondary'} className="dez-page">Senior Secondary (XI,XII)</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={''}>Register/Enroll</Link></li>
                                <li><Link to={'contact'} className="dez-page">Contact Us</Link></li>
                                </ul>
                        </div>
                    </div>
                </div>
                </div>
            </header >
        )
    }
}
export default Header;