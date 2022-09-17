import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation()
    return <>{location.state.email}</>
}

export default Payment