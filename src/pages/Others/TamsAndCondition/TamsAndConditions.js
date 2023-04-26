import React from 'react';
import { Link } from 'react-router-dom';

const TamsAndConditions = () => {
    return (
        <div className='mt-5'>
            <h3>Here is the Tams and Conditions</h3>
            <p>Back to :<Link to='/registrar'>Registrar</Link> </p>
        </div>
    );
};

export default TamsAndConditions;