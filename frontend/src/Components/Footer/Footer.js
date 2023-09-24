import React from 'react';

import './Footer.css';

function Footer() {
    return (

        <div className="Footer">
            <div className='footerParentDiv'>
                <div className="content">
                    <div>
                        <div className="heading">
                            <p>Recycling</p>
                        </div>
                        <div className="list">
                            <ul>
                                <li>Where to recycle</li>
                                <li>Recycle an item</li>
                                <li>How to recycle</li>
                                <li>Be a better recycler</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="heading">
                            <p>Help and Information</p>
                        </div>
                        <div className="list">
                            <ul>
                                <li>What do we do</li>
                                <li>FAQ's</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="heading">
                            <p>Contact Us</p>
                        </div>
                        <div className="list">
                            <p>We are here to help you in your journey of recycling</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Other Countries Pakistan - South Africa - Indonesia</p>
                    <p>Free Classifieds in India. © 2006-2021 OLX</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;