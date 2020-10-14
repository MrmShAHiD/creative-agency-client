import React from 'react';
import Client from '../Client/Client';
import ClientsFeedBack from '../ClientsFeedBack/ClientsFeedBack';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientsFeedBack></ClientsFeedBack>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;