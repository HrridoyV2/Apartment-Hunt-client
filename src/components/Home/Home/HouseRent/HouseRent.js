import React from 'react';
import img1 from '../../../../image/images/Rectangle 394.png';
import img2 from '../../../../image/images/Rectangle 396.png';
import img3 from '../../../../image/images/Rectangle 398.png';
import img4 from '../../../../image/images/Rectangle 405.png';
import img5 from '../../../../image/images/Rectangle 403.png';
import img6 from '../../../../image/images/Rectangle 404.png';
import HouseRentDetails from '../HouseRentDetails/HouseRentDetails';

const HouseRent = () => {
    const houseRentData = [
        {
            img: img1,
            title: 'Washington Avenue'
        },
        {
            img: img2,
            title: 'Family Apartment Three'
        },
        {
            img: img3,
            title: 'Gorgeous house'
        },
        {
            img: img4,
            title: 'Luxury villa'
        },
        {
            img: img5,
            title: 'Epic Huda Palacio'
        },
        {
            img: img6,
            title: 'Washington Avenue'
        },
    ]
    return (
        <section>

            <div className='container'>
                <div className="text-center my-5" style={{ color: '#16322E' }}>
                    <h5>House Rent</h5>
                    <h1 style={{ fontWeight: 'bold' }}>Discover the latest
                    rent
                    <br />
                    available today </h1>
                </div>
                <div>
                    <div className="row">
                        {
                            houseRentData.map(houseRentData =>
                                <HouseRentDetails houseRentData={houseRentData}></HouseRentDetails>)
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HouseRent;