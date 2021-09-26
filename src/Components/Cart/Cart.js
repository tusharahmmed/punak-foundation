import './Cart.css';


import React from 'react';
import Person from '../Person/Person';

const Cart = (props) => {

    let list = props.personList;

    // remove duplicate
    function removeDuplicates(data, key) {
        return [
            ...new Map(data.map(item => [key(item), item])).values()
        ]
    };

    let uniqueList = removeDuplicates(list, item => item.name);

    let totlaAccepeted = uniqueList.length;

    const totalReducer = (prev, current) => prev + current.donation;
    let totalAmount = uniqueList.reduce(totalReducer, 0);



    return (
        <div className="">
            <div className="cart-title text-lg text-gray-600 bg-white p-5">
                <h2><i className="fas fa-user-friends"></i> Accepted: <span className="text-gray-700">{totlaAccepeted}</span></h2>
                <h2><i className="fas fa-coins"></i> Total Fund: <span className="text-gray-700">${totalAmount}</span></h2>
            </div>
            <div>
                <h2 className="person-details p-5 text-center text-lg font-bold text-gray-600">Person Details</h2>
                <div className="person-container">

                    {

                        uniqueList.map(person => <Person
                            key={person.id}
                            person={person}></Person>)

                    }

                </div>
            </div>
        </div>
    );
};

export default Cart;