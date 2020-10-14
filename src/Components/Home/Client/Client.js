import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Client.css';

const Client = () => {
    return (
        <div class="text-center p-5">
            <img className="img-fluid ml-5 px-3" style={{height:"40px"}} src={slack} alt=""/>
            <img className="img-fluid ml-5 px-3" style={{height:"40px"}} src={google} alt=""/>
            <img className="img-fluid ml-5 px-3" style={{height:"40px"}} src={uber} alt=""/>
            <img className="img-fluid ml-5 px-3" style={{height:"40px"}} src={netflix} alt=""/>
            <img className="img-fluid ml-5 px-3" style={{height:"40px"}} src={airbnb} alt=""/>
        </div>
    );
};

export default Client;