import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{height: '800px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 text-justify">
                <h1 style={{fontSize:'50px', color:'#111430', fontWeight: '700'}}>Let's Grow Your<br/>Brand To The<br/>Next Level</h1><br/>
                <p style={{fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus quas repellendus aliquid commodi!</p><br/>
                <button className="btn btn-dark px-5">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;