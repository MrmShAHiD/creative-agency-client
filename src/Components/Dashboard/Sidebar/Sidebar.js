import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const {user} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:'100vh'}}>
            <div>
                <Link to="/">
                    <img src={logo} alt="" style={{ maxWidth: "150px" }} />
                </Link>
            </div>
            <div>
            <ul className="list-unstyled">
                <div>
                    <li>
                        <Link to="/orders/:_id">
                            <h2>Orders</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList">
                            <h2>Service List</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback">
                            <h2>Review</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList-admin" className="btn btn-dark">
                            <span>Admin Service list</span>
                        </Link>
                    </li>
                </div>
            </ul>
            </div>
        </div>
    );
};

export default Sidebar;