import React from 'react'

import './Service1.css'
import { AiOutlineSearch } from 'react-icons/ai'
import plastic from '../../Images/plastic.svg'
import glass from '../../Images/glass.svg'
import paper from '../../Images/paper.svg'
import electronics from '../../Images/electronics.svg'
import cardboard from '../../Images/cardboard.svg'
import Shop1 from '../../Images/Shop 1.svg'
import Shop2 from '../../Images/Shop 2.svg'
import Shop3 from '../../Images/Shop 3.svg'

function Service1() {
    return (
        <div>
            <div className="headerParentDiv">

                <h1 className='mainheading'>Recyle your item now</h1>
                <h3 className='subHeading'>Find your nearest vendor</h3>

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



            <div className='buyers-heading'>
                <h1>Best Buyers in your region</h1>
            </div>

            <div className="buyers">
                
                <div className='buyers-content'>
                    <div>
                        <img className='buyers-img' src={Shop1} alt='post' />
                    </div>
                    <div className='buyers-desc'>
                        <h1 className='buyers-name'>GreenCycle Traders</h1>
                        <h3 className='buyers-place'>Moti Nagar, Delhi</h3>
                        <ul className='buyers-categories'>
                            <li>Paper - $12</li>
                            <li>Plastic - $10</li>
                            <li>Textile - $20</li>
                        </ul>
                    </div>
                </div>

                <div className='buyers-content'>
                    <div>
                        <img className='buyers-img' src={Shop3} alt='buyers-avatar' />
                    </div>
                    <div className='buyers-desc'>
                        <h1 className='buyers-name'>GreenCycle Traders</h1>
                        <h3 className='buyers-place'>Kirti Nagar, Delhi</h3>
                        <ul className='buyers-categories'>
                            <li>Paper - $12</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service1