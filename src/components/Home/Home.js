import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData/fakeData';
import { useHistory } from "react-router-dom";


const Home = () => {
    const [vehicle, setVehicle] = useState([])
    useEffect(() => {
        setVehicle(fakeData)
    }, [fakeData])
    const history = useHistory();
    const handleClick = (carId) => {
        history.push(`/destination/${carId}`)
    }


    return (
        <div className="bg-image">
            <div className="content">
                <div className="greeting">
                    <h1 className='welcome'>WELCOME TO</h1>
                    <h2 className='name'>SPEEDY FIDELITY RIDER</h2>
                </div>
                <div className="options">
                    {
                        vehicle.map(car => {
                            return (
                                <img
                                    key={car.id}
                                    className='img'
                                    onClick={() => handleClick(car.id)}
                                    src={car.picture} alt="" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Home;