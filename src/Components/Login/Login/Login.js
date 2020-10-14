import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import logo from '../../../images/logos/logo.png';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const Login = () => {
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    // sign in with google
    const handleSignInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const user = res.user;
            const {displayName, email} = user;
            const signedInUser = {
                displayName: displayName,
                email: email,
                isSignedIn: true
            }
            return signedInUser;
        })
        .then(res => {
            setUser(res);
            history.replace(from);
        })
        .catch(err =>{
            const error = err.message;
            console.log(error);
        })
    };

    return (
        <div style={{marginTop:'50px'}} class="text-center">
            <div>
                <Link to="/">
                    <img style={{height:'80px'}} src={logo} alt=""/>
                </Link>
            </div>
            <div className="text-center" style={{marginTop:'60px', marginLeft:'400px', marginRight:'400px', border: '1px solid grey', borderRadius: '10px'}} >
                <h2 className="p-5">Log In With</h2>
                <button className="mb-5" onClick={handleSignInWithGoogle} style={{padding:'15px', fontSize:'20px', border: '1px solid grey', borderRadius:'15px'}}><img style={{height:'30px'}} src="https://i.ibb.co/VHS2GwS/google.png" alt=""/><span style={{marginLeft:'15px'}}>Google</span></button>
            </div>
        </div>
    );
};

export default Login;