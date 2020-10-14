import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="footer-bg pt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <div style={{color:'#2D2D2D'}} className="section-header mb-5">
                            <h1>Let us handle your project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <div className="mb-5 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright col-md-12">
                    <div style={{color:'#2D2D2D'}} className="section-header text-center mb-5">
                        <p>&copy;Shahid-ul Islam-{new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;