import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AdminServiceList = () => {
    const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const [serviceList, setServiceList] = useState([]);
	useEffect(() => {
		fetch("https://shrouded-atoll-40750.herokuapp.com/admin/serviceList")
			.then((res) => res.json())
			.then((data) => {
				setServiceList(data);
			});
	}, []);

    return (
        <div className="dashboard-wrapper d-flex" style={{ minHeight: "100vh", height: "auto" }}>
			<Sidebar></Sidebar>
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Admin Service List</h4>
					{loggedInUser.email && (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name}</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<div className="service-list-admin admin-content">
						<table>
							<thead>
								<tr>
									<th className="name">Name</th>
									<th className="email">Email ID</th>
									<th className="title">Service</th>
									<th className="description">Poject Details</th>
									<th className="status">Status</th>
								</tr>
							</thead>
							<tbody>
								{serviceList.map((services) => (
									<tr key={services._id}>
										<td className="name">{services.name}</td>
										<td className="email">{services.email}</td>
										<td className="title">{services.title}</td>
										<td className="description">{services.description}</td>
										<td className="status">
											<select className="status-change" name="status">
												<option value="pending">Pending</option>
												<option value="done">Done</option>
											</select>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</div>
    );
};

export default AdminServiceList;