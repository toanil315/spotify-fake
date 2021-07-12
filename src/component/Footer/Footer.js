import React, {memo} from 'react'
import "./Footer.scss";
import background from '../../assets/img/footer.jpg';

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${background})` }}>
            <div className="footer-content container">
                <div className="logo">
                    <img src={require("../../assets/img/open_logo.png").default} alt="logo" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="title row">
                            <h1>Miraculous Music Stations</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                    </div>
                    <div className="col">
                        <div className="title row">
                            <h1>Download Our App</h1>
                        </div>
                        <p>Go Mobile with our app.
                            <br></br>
                            Listen to your favourite songs at just one click. Download Now !
                        </p>
                        <img src={require("../../assets/img/app_store.jpg").default} alt="app store" />
                        <img src={require("../../assets/img/windows.jpg").default} alt="window" />
                        <img src={require("../../assets/img/google_play.jpg").default} alt="google play" />
                    </div>
                    <div className="col">
                        <div className="title row">
                            <h1>Subscribe</h1>
                        </div>
                        <p>Subscribe to our newsletter and get latest updates and offers.
                        </p>
                        <div className="footer-subscribe">
                            <div className="footer-subscribe-input">
                                <input placeholder="Enter Your Name" />
                            </div>
                            <div className="footer-subscribe-input">
                                <input placeholder="Enter Your Email" />
                            </div>
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title row">
                            <h1>Contact Us</h1>
                        </div>
                        <div>
                            <div className="footer-contact row">
                                <div className="footer-contact-icon">
                                    <img src={require("../../assets/img/phone.svg").default} alt="contact" />
                                </div>
                                <p>Phone: (+1) 202-555-0176, <br /> (+1) 2025-5501</p>
                            </div>
                            <div className="footer-contact row">
                                <div className="footer-contact-icon">
                                    <img src={require("../../assets/img/message.svg").default} alt="contact" />
                                </div>
                                <p>Email: demo@mail.com, <br /> dummy@mail.com</p>
                            </div>
                            <div className="footer-contact row">
                                <div className="footer-contact-icon">
                                    <img src={require("../../assets/img/add.svg").default} alt="contact" />
                                </div>
                                <p>Address: demo@mail.com, <br /> dummy@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="title row">
                        <h1></h1>
                    </div>
                    <p>
                        Copyright © 2018 <span>The Miraculous Music Template</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);
