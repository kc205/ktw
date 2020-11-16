import React from 'react';

export async function addVisits(data) {
    const response = await fetch("/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:data.username, password:data.password})
    });
    return await response.json();
}

export async function displayVisits(data) {
    const response = await fetch("/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:data.username, password:data.password})
    });
    return await response.json();
}

class Visits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                
            </div>
        );
    }
}
export default Visits;