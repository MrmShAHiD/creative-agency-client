import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {
    const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const { _id } = useParams();
	const [selectedService, setSelectedService] = useState([]);

	useEffect(() => {
		fetch("https://shrouded-atoll-40750.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setSelectedService(data.find((item) => item._id === _id)));
	}, []);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		fetch("https://shrouded-atoll-40750.herokuapp.com/addOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((success) => console.log(success))
			.catch((error) => console.log(error));
	};

    return (
        <div className="dashboard-wrapper d-flex">
			<Sidebar></Sidebar>
			<div className="dashboard-data w-75">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Orders</h4>
					{loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<form className="order-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="Your name / company’s name"
								ref={register({ required: true })}
							/>
							{errors.name && <span className="text-danger">Valid name is required</span>}
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="Your email address"
								ref={register({ required: true })}
							/>
							{errors.email && <span className="text-danger">Valid email is required</span>}
						</div>
						<div className="form-group">
							<input
								type="text"
								name="title"
								className="form-control"
								placeholder="Graphic Design"
								defaultValue={selectedService ? selectedService.title : "Project categry"}
								ref={register}
							/>
							{errors.title && <span className="text-danger">Valid title is required</span>}
						</div>
						<div className="form-group">
							<textarea
								name="description"
								className="form-control"
								placeholder="Project Details"
								style={{ height: "112px" }}
								defaultValue={selectedService ? selectedService.description : "Projects Description"}
								ref={register}
							/>
							{errors.description && <span className="text-danger">Valid description is required</span>}
						</div>
						<div className="form-row">
							<div className="form-group col-6">
								<input
									type="number"
									name="price"
									className="form-control"
									placeholder="Price"
									ref={register({ required: true })}
								/>
								{errors.price && <span className="text-danger">Valid price is required</span>}
							</div>
						</div>
						<button type="submit" className="btn btn-dark">
							Submit
						</button>
					</form>
				</main>
			</div>
		</div>
    );
};

export default Orders;