import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MyOrders = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const [myOrders, setMyOrders] = useState([]);
    
    useEffect(() => {
		fetch(`https://shrouded-atoll-40750.herokuapp.com/admin/orders?email=${loggedInUser.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyOrders(data);
			});
	}, []);
    
    return (
        <div className="d-flex">
            <Sidebar></Sidebar>
            <div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>My Orders</h4>
					{loggedInUser.email && (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name}</span>
						</div>
					)}
				</header>
            </div>
        </div>
    );
};

export default MyOrders;