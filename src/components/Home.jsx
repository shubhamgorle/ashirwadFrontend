import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Home = () => {
    return (
        <div className="landing-container">
            <div className="box">
                <h5>Ashirwad Land Developers and Associate</h5>
                <p></p>
                <div className="button-container">
                    <Link to='/add/mendhepathar'><button className="action-button"><span><AddCircleIcon/></span>M-ADD</button></Link>
                    <Link to='/show/mendhepathar'><button className="action-button"><span><VisibilityIcon/></span>M-SHOW</button></Link>
                    <Link to='/add/raulgaon'><button className="action-button"><span><AddCircleIcon/></span>R-ADD</button></Link>
                    <Link to='/show/raulgaon'><button className="action-button"><span><VisibilityIcon/></span>R-SHOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
