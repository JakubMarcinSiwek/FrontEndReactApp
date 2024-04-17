import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import '../styles/styles.css';


export function NavBar(props ){
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const {role}=props;

    const handleButtonClick = () => {
        navigate(`/showBee/${inputValue}`)

    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
        <>{(['Queen','Worker Bee','Army Bee'].includes(role)) ? <Link to="/bees">Go to Bee List</Link> : ''}
        <span className="link-separator">|</span>

            {(['Queen'].includes(role)) ? <Link to="/createBee">Add Bee</Link> : ''}
            <span className="link-separator">|</span>
                {(['Queen','Army Bee'].includes(role)) ? <Link to="/deleteBee">Delete Bee</Link> : ''}
            <span className="link-separator">|</span>
            {(['Queen','Army Bee','Worker Bee'].includes(role)) ? <Link to="/beeWithTrips">Bee with Trips</Link> : ''}
            <span className="link-separator">|</span>
            { (['Queen'].includes(role)) ?<Link to="/addBeeToTrip">Asign Bee to Trip</Link> : ''}
            <span className="link-separator">|</span>
            {(['Queen','Army Bee','Worker Bee'].includes(role)) ?<Link to="/showTrip">Show Trip</Link> : ''}
            <span className="link-separator">|</span>
            {(['Queen','Army Bee'].includes(role)) ? <Link to="/createTrip">Create Trip</Link>:' '}
            <span className="link-separator">|</span>
            {(['Queen','Army Bee'].includes(role)) ?<Link to="/addPlaceToTrip">Add Place to Trip</Link> :' '}
            <span className="link-separator">|</span>

            <input
                type="text"
                placeholder="Enter Bee ID"
                value={inputValue}
                onChange={handleInputChange}
            />


    <button onClick={handleButtonClick}>Get Bee Details</button></>
);
}

