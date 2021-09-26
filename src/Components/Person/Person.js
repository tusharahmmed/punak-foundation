import './Person.css';

import React from 'react';

const Person = (props) => {

    let { name, img } = props.person;

    return (
        <div className="person">
            <div className="person-thumb">
                <img className="rounded-full" src={img} alt="" />
            </div>
            <div className="person-name">
                <p className="text-center text-lg text-gray-700">{name}</p>
            </div>
        </div>
    );
};

export default Person;