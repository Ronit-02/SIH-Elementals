import React from 'react'

import './Service2.css'
import { AiOutlineSearch } from 'react-icons/ai'
import plastic from '../../Images/plastic.svg'
import glass from '../../Images/glass.svg'
import paper from '../../Images/paper.svg'
import electronics from '../../Images/electronics.svg'
import cardboard from '../../Images/cardboard.svg'

import Person1 from '../../Images/Person 1.svg'
import Person2 from '../../Images/Person 2.svg'
import Person3 from '../../Images/Person 3.svg'

function Service2() {
    return (
        <div className='service2'>
            
            <div className="headerParentDiv">

                <h1 className='mainheading'>Find Sellers Now</h1>
                <h3 className='subHeading'>Locate all the sellers in your locality</h3>

                <div className="productSearch">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Enter your location..."
                        />
                    </div>
                    <div className="searchAction">
                        <AiOutlineSearch />
                    </div>
                </div>

                <div className='categories'>
                    <img src={plastic} alt='plastic-bottle' className='categoryImage' />
                    <img src={glass} alt='plastic-bottle' className='categoryImage' />
                    <img src={paper} alt='plastic-bottle' className='categoryImage' />
                    <img src={electronics} alt='plastic-bottle' className='categoryImage' />
                    <img src={cardboard} alt='plastic-bottle' className='categoryImage' />
                </div>
            </div>



            <div className='sellers-heading'>
                <h1>Best Sellers in your region</h1>
            </div>

            <div className="sellers">

                <div className='sellers-post'>
                    <div>
                        <img className='sellers-img' src={Person1} alt='post' />
                    </div>
                    <div className='sellers-desc'>
                        <h1 className='sellers-name'>Anjali Sehgal</h1>
                        <h3 className='sellers-place'>Moti Nagar, Delhi</h3>
                        <ul className='sellers-categories'>
                            <li>Cardboard - 1kg</li>
                            <li>Clothes- 5kg</li>
                        </ul>
                    </div>
                </div>

                <div className='sellers-post'>
                    <div>
                        <img className='sellers-img' src={Person2} alt='post' />
                    </div>
                    <div className='sellers-desc'>
                        <h1 className='sellers-name'>Amit Vohra</h1>
                        <h3 className='sellers-place'>Moti Nagar, Delhi</h3>
                        <ul className='sellers-categories'>
                            <li>Paper - 1kg</li>
                            <li>Plastic - 1.7kg</li>
                        </ul>
                    </div>
                </div>

                <div className='sellers-post'>
                    <div>
                        <img className='sellers-img' src={Person3} alt='post' />
                    </div>
                    <div className='sellers-desc'>
                        <h1 className='sellers-name'>Rohit Sinha</h1>
                        <h3 className='sellers-place'>Tilak Nagar, Delhi</h3>
                        <ul className='sellers-categories'>
                            <li>Clothes - 2kg</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service2