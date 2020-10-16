import React, { useEffect, useState } from 'react';
import ClientFeedBackDetails from '../ClientFeedBackDetails/ClientFeedBackDetails';

const ClientsFeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('https://shrouded-atoll-40750.herokuapp.com/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h2 className="text-center">Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        feedbacks.map(feedbacks => <ClientFeedBackDetails feedbacks={feedbacks} key={feedbacks.name}></ClientFeedBackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedBack;