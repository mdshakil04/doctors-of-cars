/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className=''>
            <div className=' text-center my-4'>
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
                {/* <p className=' text-2xl '>We have {services.length} services</p> */}
            </div>
            <div className='container mx-auto md:grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    services.map(service => <Service 
                        service={service}
                        key={service._id}></Service> )
                }
            </div>
        </div>
    );
};

export default Services;