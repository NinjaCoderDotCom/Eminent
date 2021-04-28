import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink, faGrinBeamSweat } from '@fortawesome/free-regular-svg-icons';
import banner from "./../../assets/images/banner.png";

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: " ",
            author: " ",
        }
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
        this.getQuote();
        const intervalID = setInterval(() => {
            this.getQuote()
        }, 24 * 60 * 60 * 1000);
        return () => {
            clearInterval(intervalID);
        }
    }

    getQuote() {
        fetch('http://quotes.rest/qod.json?category=inspire')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    quote: data.contents.quotes[0].quote,
                    author: data.contents.quotes[0].author,
                })
            })
    }

    render() {
        return (
            <div className="content-block" style={{ backgroundImage: "url(" + banner + ")", height: "400px", width: "1900px", marginTop: "50px" }}>
                <div className="section-full content-inner">
                    <div className="container">
                        <div className="section-head text-black text-center">
                            <h2 className="m-b0">Quote A Day Keeps You Inspired All The Way!! <FontAwesomeIcon icon={faSmileWink} color="#0CB6EC" /> <FontAwesomeIcon icon={faGrinBeamSweat} color="#6705c2" /></h2>
                        </div>
                        <div className="text-black text-center">
                            <h3 className="m-b0">{this.state.quote}</h3>
                            <p>-{this.state.author}</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Quotes;