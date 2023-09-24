import React from 'react'

import './Service3.css'
import Shop1 from '../../Images/Shop 1.svg'
// import Shop2 from '../../Images/Shop 2.svg'
import Shop3 from '../../Images/Shop 3.svg'

function Service3() {
    return (
        <div className='service3'>
            <div className='officers-heading'>
                <h1>Your region: <span className='officers-post'>Moti Nagar, Delhi</span></h1>
            </div>

            <h2 className='officers-requests'>2 Acceptance Requests</h2>

            <div className="officers">
                
                <div className='officers-content'>
                    <div>
                        <img className='officers-img' src={Shop1} alt='post' />
                    </div>
                    <div className='officers-desc'>
                        <h1 className='officers-name'>GreenCycle Traders</h1>
                        <h3 className='officers-place'>Moti Nagar, Delhi</h3>
                        <ul className='officers-categories'>
                            <li>Paper - $12</li>
                            <li>Plastic - $10</li>
                            <li>Textile - $20</li>
                        </ul>
                    </div>
                </div>

                <div className='officers-content'>
                    <div>
                        <img className='officers-img' src={Shop3} alt='officers-avatar' />
                    </div>
                    <div className='officers-desc'>
                        <h1 className='officers-name'>GreenCycle Traders</h1>
                        <h3 className='officers-place'>Kirti Nagar, Delhi</h3>
                        <ul className='officers-categories'>
                            <li>Paper - $12</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service3