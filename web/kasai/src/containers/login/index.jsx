import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'
import { PostData } from '../../services/postData';

class Login extends Component {

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
        console.log('====================================');
        console.log("handle submit");
        console.log('====================================');
        PostData('register', this.state).then ((result) => {
            let responseJSON = result;
            console.log(responseJSON);
            
        })
    }

    onChange() {
        console.log('====================================');
        console.log("on changed triggered");
        console.log('====================================');
    }

    
      
    render() {
        // const { res, invalid, displayErrors } = this.state;
        return (
            <div>
                  <div className="row">
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <input id="login" className="btn red" type="submit" onClick={this.handleSubmit}/>
                            <Link to="/register" className="btn blue ">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;