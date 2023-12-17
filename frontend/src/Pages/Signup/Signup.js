import './Signup.css'

import { React, useState } from 'react'
import Collector from '../../Images/collector.svg';
import Ground from '../../Images/ground.svg';

function Signup() {

    const [inputs, setInputs] = useState({});
    // const [userType, setUserType] = useState("");

    const categorySelect = (e, type) => {
        document.querySelector('.active-cat').classList.remove('active-cat')
        e.target.className = 'category active-cat'
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

            <div className='signup-left'>
                <img className='signup-img1' src={Collector} alt="garbage-collection-process" />
                <img className='signup-img2' src={Ground} alt="ground" />
            </div>

            <div className="signup-right">

                <h1 className='signup-heading'>Register Now</h1>

                <div className='signup-content'>

                    <h2 className='signup-title'>Who are you?</h2>

                    <div className="signup-category">
                        <div className='category active-cat' onClick={(e) => categorySelect(e, "seller")} >Seller</div>
                        <div className='category' onClick={(e) => categorySelect(e)} >Garbage Collector</div>
                        <div className='category' onClick={(e) => categorySelect(e)} >Municipal Officer</div>
                    </div>

                    <h2 className="signup-title">Provide your details</h2>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input
                            className='form-input'
                            placeholder='name'
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                            />
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

        </div>
    )
}

export default Signup