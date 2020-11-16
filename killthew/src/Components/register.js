import React, {useState} from 'react';
import axios from 'axios';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter, Link } from "react-router-dom";
const API_BASE_URL = '';
  
function Register(props) {
    const [state , setState] = useState({
        fullname:'',
        username:'',
        password:'', 
        cpassword:'',
        passerror:'',
        successMessage:''
    });

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }));
    };

    const redirectToHome = () => {
        props.history.push('/home');
    };

    const redirectToLogin = () => {
        props.history.push('/login'); 
    };

    const handleSubmitClick = (e) => {
        if(performValidation()) {
            props.showError(null);
            const payload = {
                "fullname": state.fullname,
                "username": state.username,
                "password": state.password,
            }
            axios.post(API_BASE_URL+'/user/register', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                } else {
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    };
  
    const performValidation = () =>  {
        if(state.password.length > 0 && state.password !== state.cpassword) {
            props.showError('Passwords didn\'t match');
            return false;
        }
        if(state.username.length < 2 || state.fullname.length < 2) {
            props.showError('Enter valid details');
            return false;
        }
        return true;
    };

    var style = { 
        content : {
            'display': 'grid',
            'height': '30vh',
            'placeItems': 'center',
        },
        register: {
            'placeItems': 'left',
            'paddingRight': '45px'
        },
        errorStyle : {  
            color: 'red'
        },
    };

    return (
        <div style={style.content}>
            <form>
                <span id="error" style = {style.errorStyle}></span> 
                {
                //handle error condition
                }
                <div className="form-group text-left">
                    <input type="text" 
                    className="form-control" 
                    id="fullname"
                    placeholder="Your Full Name" 
                    data-test="fullname" 
                    value={state.fullname} 
                    onChange = {handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <input type="text" 
                    data-test="username" 
                    id="username"
                    className="form-control" 
                    placeholder="Your Email " 
                    value={state.username} 
                    onChange = {handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <input type="password" 
                    id="password"
                    className="form-control" 
                    placeholder="Password" 
                    data-test="password" 
                    value={state.password} 
                    onChange = {handleChange} />
                </div>
                <div className="form-group text-left">
                    <input type="password" 
                    id="cpassword"
                    className="form-control" 
                    placeholder="Confirm Password" 
                    data-test="password" 
                    value={state.cpassword} 
                    onChange = {handleChange} />
                </div>
                <input type="submit" value="Register" onClick={handleSubmitClick} data-test="submit" />
                <div className="mt-2">
                    <span>Already have an account? Login<Link onClick={() => redirectToLogin()}> here</Link></span>
                </div>
            </form>
        </div>
    );
}

export default withRouter(Register);