import React from 'react';
import MyServices from '../../Dashboard/MyRent/MyRent';
// import Order from '../Order/Order';
// // import MyReview from '../MyReview/MyReview';
// // import AllOrders from '../AllOrders/AllOrders';
import AddService from '../../Dashboard/AddHouse/AddHouse';

import CustomBar from './CustomBar';

const Sidebar = ({isAdmin, setDisplay}) => {
    
    // for customer
    
    const services = [<MyServices />, 'Services']
    
    

    // for admin
    
    const addService = [<AddService />, 'Add Service']
    
    

    return (
        <aside>
            {
                isAdmin ? 
                <CustomBar setDisplay={setDisplay} features={[addService]} /> : 
                <CustomBar setDisplay={setDisplay} features={[ services ]} />
            }
        </aside>
    );
};

export default Sidebar;