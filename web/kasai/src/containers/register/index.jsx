import React, { Component } from "react";
import { PostData } from '../../services/postData';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit() {
        event.preventDefault();
        console.log('====================================');
        console.log("handle submit");
        console.log('====================================');
        PostData('register', this.state).then ((result) => {
            console.log("state: " + this.state.username + " - " + this.state.password)
            let responseJSON = result;
            console.log(responseJSON);
            
        })
        //alert('Your favorite flavor is: ' + this.state.username);
        //event.preventDefault();
    }


    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { username, password } = this.state;

        axios.post('http://localhost:7000/v1/auth/register', { username, password })
        .then((result) => {
            console.log(result)
            if(result.status == 200){
                this.props.history.push("/profile");
                console.log('Successfully Login');
            }
        });
      }

    
      
    render() {
        const { username, password } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text" name="username" value={username} onChange={this.onChange} />
            <input type="text" name="password" value={password} onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default Register;