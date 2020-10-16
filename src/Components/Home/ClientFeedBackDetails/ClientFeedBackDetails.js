import React from 'react';

const ClientFeedBackDetails = (props) => {
    const {name, designation, feedback, photo} = props.feedbacks;
    return (
        <div className="card shadow-sm card-feedback">
            <div className="card-header bg-transparent d-flex  align-items-center">
                <img className="mx-3" src={photo} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <h5>{designation}</h5>
                    <p className="card-text text-secondary">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedBackDetails;