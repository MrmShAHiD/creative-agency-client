import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Feedback = () => {
    const {user} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
	const [feedback, setfeedback] = useState([]);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
		data.photo = loggedInUser.photoURL;
		fetch("https://shrouded-atoll-40750.herokuapp.com/addfeedback", {
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
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Reviews</h4>
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
					<form className="order-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<img name="photo" src={loggedInUser.photoURL} alt=""/>
                            <input
								type="text"
								name="name"
								className="form-control"
								placeholder="Your name "
								ref={register({ required: true })}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="designation"
								className="form-control"
								placeholder="Company’s name, Designation"
								ref={register({ required: true })}
							/>
						</div>
						<div className="form-group">
							<textarea
								name="feedback"
								className="form-control"
								placeholder="Write your review"
								style={{ height: "112px" }}
								ref={register({ required: true })}
							/>
						</div>
						<button type="submit" className="btn btn-dark">
							Send
						</button>
					</form>
				</main>
			</div>
		</div>
    );
};

export default Feedback;