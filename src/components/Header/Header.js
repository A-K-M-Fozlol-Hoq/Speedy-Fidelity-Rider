import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Urban_Riders.png';
import { UserContext } from '../../App';


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt='ok' />
                </div>
                <div className="menu">
                    <Link className='item' to="/home">Home</Link>
                    <Link className='item' to="/destination/:carId">Destination</Link>
                    <Link className='item' to="/blog">Blog</Link>
                    <Link className='item' to="/contact">Cotact</Link>
                    {
                        loggedInUser.name?
                        <button onClick={()=>setLoggedInUser({})}>Sign Out</button>:
                        <button><Link to="/login">Sign In</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};


export default Header;