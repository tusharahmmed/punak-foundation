import './Donor.css';

import React from 'react';

const Donor = (props) => {

    const { name, img, donation, age, address, phone } = props.donor;

    return (
        <div className="m-auto bg-white pt-3 w-4/5 shadow-sm rounded-lg donor">
            <img className="donor-img rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={img} alt="" />
            <div className="flex flex-col  max-w-sm shadow-md py-8 pt-12 px-10 md:px-8 ">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex flex-col text-center md:text-left">
                        <div className="font-bold text-lg text-gray-500">{name}</div>
                        <div className="text-gray-500 mb-3 whitespace-nowrap">{address}</div>
                        <div className="number text-gray-500 mb-3 whitespace-nowrap"><i className="fas fa-phone-alt"></i> {phone}</div>
                        <div className="text-gray-500 mb-3 whitespace-nowrap">Age: {age}</div>
                        <div className="text-gray-500 mb-3 whitespace-nowrap">Donation: ${donation}</div>
                        <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                            <div className="links flex">
                                <a href="https://www.linkedin.com" className="hover:cursor-pointer "><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com" className="hover:cursor-pointer "><i className="fab fa-facebook-square"></i></a>
                            </div>
                            <button className="donate-btn" onClick={() => props.handle(props.donor)}>Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;