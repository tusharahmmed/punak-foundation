import './Fund.css';

import React, { useEffect, useState } from 'react';
import Donor from '../Donor/Donor';
import Cart from '../Cart/Cart';



const Fund = () => {

    // set data from api
    const [donors, setDonors] = useState([]);
    // set accepted person
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDonors(data));
    }, []);



    // handle accept btn
    const handleAccept = item => {
        let newList = [...persons, item];

        setPersons(newList);
    }



    return (
        <>
            <div className="fund-title p-10">
                <h2 className="text-6xl text-center font-bold text-gray-500 ">Donation Request <span className="dot"></span></h2>
            </div>
            <div className="fund ">
                <div className="donor-container pb-16 mx-6">
                    {
                        donors.map(donor => <Donor
                            key={donor.id}
                            handle={handleAccept}
                            donor={donor}></Donor>)
                    }
                </div>
                <div className="total-cart">
                    <Cart
                        personList={persons}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Fund;