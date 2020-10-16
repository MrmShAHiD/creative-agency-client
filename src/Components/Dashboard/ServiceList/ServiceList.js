import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
    const [serviceList, setServiceList] = useState([]);
    
    useEffect(() => {
		fetch(`https://shrouded-atoll-40750.herokuapp.com/serviceList?email=${loggedInUser.email}`)
			.then((res) => res.json())
			.then((data) => {
				setServiceList([...data]);
			})
			.catch((err) => console.log(err));
    }, []);
    
    const ServiceListCard = ({ serviceList }) => {
		return (
			<div className="col-lg-5 my-lg-0 my-3">
				<div className="service-list-card">
					<div className="d-flex align-items-center">
						{serviceList.photo && (
							<img src={serviceList.photo} alt="service icon" />
						)}
						<button className="btn btn-dark">Pending</button>
					</div>
					<div className="mt-2">
						<h4>{serviceList.title}</h4>
						<p>{serviceList.description}</p>
					</div>
				</div>
			</div>
		);
    };
    


    return (
        <div className="d-flex">
			<Sidebar></Sidebar>
			<div className="w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Service List</h4>
					{loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name}</span>
						</div>
					) : (
						<div>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<div className="container-fluid px-0">
						<div className="row">
							{serviceList.length && (
								serviceList.map((serviceList) => <ServiceListCard serviceList={serviceList}></ServiceListCard>)
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
    );
};

export default ServiceList;