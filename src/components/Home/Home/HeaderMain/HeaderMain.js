import React from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <section>
            <div className="my-5" style={{ textAlign: 'center', padding: '20px 0' }} >
                <h1 style={{ textAlign: 'center', fontSize: "48px" }}
                >FIND YOUR HOUSE RENT</h1>
                <input className='input mt-5' type="text" placeholder="Search..." />
                <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                    className='search-button mx-3' type="submit">Find Now</button>
            </div>
        </section>
    );
};

export default HeaderMain;