import React from 'react';

export async function addDonates(data) {
  const response = await fetch("/login", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username:data.username, password:data.password})
  });
  return await response.json();
}

export async function displayDonates(data) {
  const response = await fetch("/login", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username:data.username, password:data.password})
  });
  return await response.json();
}

class Donates extends React.Component {
    constructor(props) {
        super(props);
    }
}
export default Donates;