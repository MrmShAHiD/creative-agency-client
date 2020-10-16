import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const {user} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;
    return (
        <div className="d-flex flex-column col-md-2 py-5 px-4" style={{height:'100vh', backgroundColor:'#E5E5E5'}}>
            <div>
                <Link to="/">
                    <img src={logo} alt="" style={{ maxWidth: "150px" }} />
                </Link>
            </div>
            <div className="mt-5 py-5">
            <ul className="list-unstyled">
                <div>
                    <li>
                        <Link to="/my-orders">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList">
                            Service List
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback">
                            Review
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