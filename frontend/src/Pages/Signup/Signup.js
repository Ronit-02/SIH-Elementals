import './Signup.css'

import { React, useState } from 'react'
import Collector from '../../Images/collector.svg';
import Ground from '../../Images/ground.svg';

function Signup() {

    const [inputs, setInputs] = useState({});
    const [user, setUser] = useState("");

    const handleClick = (val) => {
        setUser(val);
        console.log(user)
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className='signup'>

            <div className="signup-left">

                <h1 className='signup-heading'>Register Now</h1>

                <div className='signup-content'>

                    <h2 className='signup-title'>Who are you?</h2>

                    <div className="signup-category">
                        <div className='category' onClick={() => handleClick("seller")} >Seller</div>
                        <div className='category' onClick={() => handleClick("gc")} >Garbage Collector</div>
                        <div className='category' onClick={() => handleClick("govt")} >Municipal Officer</div>
                    </div>

                    <h2 className="signup-title">Provide your details</h2>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        {/* <label className='form-label'>Enter your name:</label> */}
                        <input
                            className='form-input'
                            placeholder='name'
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            />
                        {/* <label className='form-label'>Enter your age:</label> */}
                        <input
                            className='form-input'
                            placeholder='age'
                            type="number"
                            name="age"
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                        <button className='form-button'>Submit</button>
                    </form>

                </div>
            </div>

            <div className='signup-right'>
                <img className='signup-img1' src={Collector} alt="garbage-collection-process" />
                <img className='signup-img2' src={Ground} alt="ground" />
            </div>

        </div>
    )
}

export default Signup