import React from 'react';

const Pony = ({ pony }) => {
    return (
        <div>
            <h1>{pony.name}</h1>
            <h2>{pony.alias}</h2>
            <p>Sex: {pony.sex}</p>
            <img src={pony.image} alt={pony.name} style={{ width: '200px' }} />
        </div>
    );
};

export default Pony;