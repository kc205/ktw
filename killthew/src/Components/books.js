import React from 'react';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
const API_BASE_URL = '';
export async function addBooks(data) {
    const response = await fetch("/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:data.username, password:data.password})
    });
    return await response.json();
}

export async function displayBooks(data) {
    const response = await fetch("/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:data.username, password:data.password})
    });
    return await response.json();
}

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            bookname:'',
            startdate:null,
            enddate:null,
            progress:'',
            editClicked:props.editClicked
        };
    }

    render() {
        return (
            <div className="navbar">
                <form onSubmit={this.mySubmitHandler}>
                    <h1>Hello {this.state.username}</h1>
                    <p>Book name:</p>
                    <input type='text' className="form-control" onChange = {(event, newValue) => this.setState({bookname:newValue})} />
                    <p>Start Date: <input type="text" className="form-control" id="datepicker" onChange = {(event, newValue) => this.setState({startdate:newValue})} /></p>
                    <p>End Date: <input type="text" className="form-control" id="datepicker" onChange = {(event, newValue) => this.setState({enddate:newValue})} /></p>
                    <div>
                        <button type="button" disabled={!this.state.editClicked}>Delete</button>
                        <input type='submit' />
                    </div>          
                </form> 
            </div>
        );
    }
}

function addButton() {
    return (
        <Books toggleWindow={true} />
    )
}
class DisplayBook extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: displayBooks(props.username)
        }
    }

    render() {
        return (
            <div className="navbar">
                <button class="btn btn-default" onClick = {() => addButton()}>Add book</button>
                <div class="table-responsive">          
                    <table class="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Book name</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Progress %</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.books.map(book => {
                            return (
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.startdate}</td>
                                    <td>{book.enddate}</td>
                                    <td>{book.progress}</td>
                                    <button class="btn btn-default" onClick = {() => addButton()}>Edit</button>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            toggleWindow: (props.toggleWindow)?true:false
        };
    }

    renderComponent() {
        switch(this.state.toggleWindow) {
            case true:
                return <AddBook />
            case false:
                return <DisplayBook username={this.state.username}/>
            default:
                break;
        }
    }

    render() {
        return(
            <div className="container">
                {this.renderComponent()}
            </div>
        );
    }
}
export default Books;