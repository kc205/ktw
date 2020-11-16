import React, {useState} from 'react';
import axios from 'axios';
//import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter, Link} from "react-router-dom";
const API_BASE_URL = '';

export async function loginUser(data) {
    const response = await fetch("/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:data.username, password:data.password})
    });
    return await response.json();
}

function Login(props) {

    const [state , setState] = useState({
        username:'',
        password:'',
        loginerror:''
    });

    const redirectToHome = () => {
        props.history.push('/home');
    }

    const redirectToRegister = () => {
        props.history.push('/register');
    }
    
    const redirectToPasswordReset = () => {
        props.history.push('/register');
    }

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const mySubmitHandler = (event) => {
        if(performValidation()) {
            props.showError(null);
            const payload={
                "username": state.username,
                "password": state.password,
            }
            axios.post(API_BASE_URL+'/user/login', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null);
                    } else {
                        props.showError('Invalid credentials');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
    }

    const performValidation = (event) => {
        if(state.username.length <= 2 && state.password.length <= 2) {
            props.showError('Enter valid username and password');
            return false;
        }
        return true;
    };

    var style = {  
        content : {
            'display': 'grid',
            'height': '20vh',
            'placeItems': 'center',
        },
        register: {
            'placeItems': 'left',
            'paddingRight': '45px'
        }
    };

    return (
        <div style={style.content}>
            <form>
                <div className="form-group text-left">
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter Email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Enter Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={mySubmitHandler}
                >Submit</button>
            </form>
            <br></br>
            <div style={style.register}>
                <span class="psw">Forgot <Link onClick={() => redirectToPasswordReset()}>password?</Link></span>
                <br></br>
                <span class="psw">Dont have an account? <Link onClick={() => redirectToRegister()}>Register</Link></span>               
            </div>
        </div>
    );
}

export default withRouter(Login);