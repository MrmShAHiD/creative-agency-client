import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({services}) => {
    const id = services._id;
    
    return (
        <div className="col-md-4 text-center mb-5">
            <Link to={{
                pathname: "/orders/:_id",
                state: { id }

            }}>
                <img style={{ height: '70px' }} src={services.photo} alt="" />
                <h5 className="mt-3 mb-3">{services.name}</h5>
                <p className="text-secondary">{services.description}</p>
            </Link>
        </div>
    );
};

export default ServiceDetails;