import React from 'react';

import './Home.css'
import { NavLink } from "react-router-dom";
import Org from '../../Images/organization people.svg'

function Home() {
    return (
        <div className="home">

            <div className="home-about">
                <div className="home-about-left">
                    <img src={Org} alt="profile" />
                </div>
                <div className="home-about-right">
                    <h3 className="home-about-category">About Us</h3>
                    <h1 className="home-about-title">Welcome to TrashTalk</h1>
                    <p className="home-about-content">TrashTalk is a marketplace that connects buyers and 
                    sellers of recycled and old items. We believe in the power of recycling to create a 
                    better and more sustainable future. Our platform is designed to make recycling accessible to 
                    everyone, inspiring a community of like-minded individuals to join the recycling revolution.
                    </p>
                    <NavLink to="/about" className="readmore-link">
                        Read More
                    </NavLink>

                </div>
            </div>

            {/* <div className='home-catchline'>
                We are top
                <span className="home-highlight"> recylcling </span> 
                organization to create best
                <span className="home-highlight"> environemnt </span> 

                <NavLink to="/service1" className="services-link">
                    View our services
                </NavLink>
            </div> */}

            <div className="home-features">
                <h1 className="home-features-heading">Why Choose TrashTalk</h1>
                <p className="home-features-desc">TrashTalk is the perfect platform for environmentally conscious 
                consumers who care about the planet. By choosing to buy and sell recycled items, you are helping to 
                reduce waste and promote sustainability. Our platform offers a simple, convenient, and cost-effective 
                way to recycle, making it accessible to everyone.
                </p>
                <div className="features-categories">
                    <div className="feature-cat">
                        <div className="cat-number">01.</div>
                        <div className="cat-title">Reduce Waste</div>
                        <div className="cat-desc">By buying and selling recycled items, you help reduce waste and promote sustainability.</div>
                    </div>
                    <div className="feature-cat">
                        <div className="cat-number">02.</div>
                        <div className="cat-title">Easy to Use</div>
                        <div className="cat-desc">Our platform is simple and easy to use, making recycling accessible to everyone.</div>
                    </div>
                    <div className="feature-cat">
                        <div className="cat-number">03.</div>
                        <div className="cat-title">Cost-Effective</div>
                        <div className="cat-desc">Our recycled items are cost-effective, helping you save money while promoting sustainability.</div>
                    </div>
                    <div className="feature-cat">
                        <div className="cat-number">04.</div>
                        <div className="cat-title">Community Driven</div>
                        <div className="cat-desc">Join our community of like-minded individuals who share your passion for recycling and sustainability.</div>
                    </div>
                </div>
            </div>

            <div className="home-commitment">
                <p className="commitment">
                TrashTalk is the perfect platform for environmentally conscious consumers who care 
                about the planet. By choosing to buy and sell recycled items, you are helping to reduce 
                waste and promote sustainability. Our platform offers a simple, convenient, and cost-effective 
                way to recycle, making it accessible to everyone.
                </p>
            </div>

        </div>
    );
}

export default Home;