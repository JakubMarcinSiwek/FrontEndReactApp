import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import BeeList from "./components/BeeList";
import BeeDetails from "./components/BeeDetails";
import {NavBar} from "./components/NavBar";
import AddBeeForm from "./components/AddBeeForm";
import DeleteBeeForm from "./components/DeleteBeeForm";
import BeeWithTrips from "./components/BeeWithTrips";
import AddBeeToTrip from "./components/AddBeeToTrip";
import BeeWith from "./components/BeeWith"
import TripDetailsPage from "./components/TripDetailsPage";
import CreateTripPage from "./components/CreateTripPage";
import AssignPlacePage from "./components/AssignPlacePage";
import Login from "./components/Login";
import Cookies from "js-cookie";

function App() {

    const [selectedBeeId, setSelectedBeeId] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('app : '+role)
    },[role,token] );


    const handleInputChange = (event) => {
        setSelectedBeeId(event.target.value);
    };



    return (
        <div>
        {token?(
    <Router>
        <div className="App">
            <NavBar role={role}
                selectedBeeId={selectedBeeId}
                    onInputChange={handleInputChange}></NavBar>

            <Routes>
                <Route path="/bees" element={<BeeList role={role} token={token}/>}/>
                <Route path="/showBee/:id" element={<BeeDetails token={token}/>}/>
                <Route path="/createBee" element={<AddBeeForm role={role} token={token}/>}/>
                <Route path="/deleteBee" element={<DeleteBeeForm role={role} token={token}/>}/>
                <Route path="/showBeeWithTrips/:id" element={<BeeWithTrips role={role} token={token}/>}/>
                <Route path="/beeWithTrips" element={<BeeWith token={token}/>}/>
                <Route path="/addBeeToTrip" element={<AddBeeToTrip role={role} token={token}/>}/>
                <Route path="/showTrip" element={<TripDetailsPage role={role} token={token}/>}/>
                <Route path="/createTrip" element={<CreateTripPage role={role} token={token}/>}/>
                <Route path="/addPlaceToTrip" element={<AssignPlacePage token={token}/>}/>

                <Route path="/" element={<BeeList role={role} token={token}/>}/>


            </Routes>
        </div>
    </Router>):
            (<Login setToken={setToken} setRole={setRole}/>)

    }
        </div>
    );
}

export default App;
