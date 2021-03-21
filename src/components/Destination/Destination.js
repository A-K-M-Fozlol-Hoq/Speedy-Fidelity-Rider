import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Destination.css';
import fakeData from '../../fakeData/fakeData';
import MapContainer from '../MapContainer/MapContainer ';


const Destination = () => {


    const [ selectedDate, setSelectedDate ] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useParams is not working.I dont know why, I spend a lot of time to fix it, but failed :( 
    // const { carId } = useParams();

    // using window.location.herf instead of useParams
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    let carId = getLastItem(window.location.href)
    const [cars, setCars] = useState([])

    useEffect(() => {
        setCars(fakeData)
    }, [fakeData])

    // setting bike as default car 
    if (carId === ':carId') {
        carId = 0;
    }
    
    // finding exact car
    const car = cars.find(car => car.id == carId)
    var pickFrom;
    var pickTo;


    const handleSubmit = (event) => {
        event.preventDefault();
        pickFrom = document.getElementById('pick_from').value;
        pickTo = document.getElementById('pick_to').value;
        document.getElementById("search-container").style.display = "none";
        document.getElementById("cart-container").style.display = "block";
    }
    if (pickFrom === undefined) {
        pickFrom = 'Dhaka'
    }
    if (pickTo === undefined) {
        pickTo = 'Cumilla'
    }


    return (
        <>
            <div className="destination">
                <div className="user">
                    <h3>Welcome, </h3>
                    <h4>{loggedInUser?.name}</h4>
                </div>
                <div id="search-container">
                    <form className='search-form' onSubmit={handleSubmit}>
                        <br/>
                        <label htmlFor="pick_from">Pick From</label>
                        <input type="text" id="pick_from"
                            name="pick_from" placeholder="Pick From.."></input>

                        <label htmlFor="pick_to">Pick To</label>
                        <input type="text" id="pick_to"
                            name="pick_to" placeholder="Pick To.."></input>
                        <input type="submit" value='Search'></input>
                    </form>
                </div>
                <div id="cart-container">
                    <img src={car?.picture} alt="" />
                    <div className="person">
                        <img className="person-img" src={car?.personImg} alt="" />: {car?.person}
                    </div>
                    <div className="total">
                        Total Cost: {car?.price}
                    </div>
                </div>
            </div>
            <div className="map">
                <p style={{ marginTop: '50px' }}>Google map is not showing</p>
                    <MapContainer id='map-container'></MapContainer>
                
            </div>
        </>
    );
};


export default Destination;

                