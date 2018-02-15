import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'

class Login extends Component {

    constructor () {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("clicked");
        
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({
            invalid: true,
            displayErrors: true,
          });
          return;
        }
        const form = event.target;
        const data = new FormData(form);
    
        for (let name of data.keys()) {
          const input = form.elements[name];
          const parserName = input.dataset.parse;
          console.log('parser name is', parserName);
          if (parserName) {
            const parsedValue = inputParsers[parserName](data.get(name))
            data.set(name, parsedValue);
          }
        }
        
        this.setState({
            res: stringifyFormData(data),
          invalid: false,
          displayErrors: false,
        });
    
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
      }
      
    render() {
        const { res, invalid, displayErrors } = this.state;
        return (
            <div>
                  <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="username" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn red">Login</button>
                            <Link to="/register" className="btn blue ">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;