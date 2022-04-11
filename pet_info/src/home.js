/* Configuration of the API 'randomusers' to render the data into the cards. We get 10 results, and initially we have an empty array. Then we pass this info to the InfoCard component
onCheck component was supossedly made to act as a gate between the event of clicking on certain person and redirecting the user to a new page with info about this person. Now, it just log into the console the title and the last name of the person... */

import React from 'react';
import { useState, useEffect } from 'react';
import InfoCard from './infoCard';
import onCheck from './onCheck';


function Home () {

    const [users, setUsers] = useState([]);
    useEffect (() => {
        (async () => {
        let userData;
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            userData = (await response.json()).results;
        } catch (error) {
            console.log(error);
            userData = [];
        }

        setUsers(userData);

        })();
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <div onClick={() => {onCheck(user)}}><InfoCard userData={user} key={index} /></div>
            ))}
        
        </div>
    );
};

export default Home;