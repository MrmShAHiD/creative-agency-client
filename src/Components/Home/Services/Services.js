import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center p-5">
              <h1>Provide awesome services</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(services => <ServiceDetails services={services} key={services._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;