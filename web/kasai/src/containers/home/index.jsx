import React, { Component } from "react";

class Home extends Component {
    state = {  }

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:7000/v1/auth/note/retrieve-all?user-id=1')
        .then(results => {
            return results.json();
        }).then(data => {
            let notes = data.map((note) => {
                return(
                    note.content
                )
            })
            this.setState({notes: notes})
            console.log("state: ", this.state.notes);
            
        })
    }
    render() {
        return (
            <div>
              Welcome Home
              <div>
                <p>{this.state.notes}</p>
              </div>
            </div>
        );
    }
}

export default Home;