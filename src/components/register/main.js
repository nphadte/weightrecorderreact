import React, { Component } from 'react';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)  {
            event.preventDefault();
            fetch('http://localhost:3030/customers',
            {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }
        )
    }

    render(){
        return (
            <main>
                <h2>Register to participate</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name: 
                            <input type="text"  name="username" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: 
                            <input type="text"  name="password" />
                        </label>
                    </div>
                    <div>
                        <input type="submit"  value="Submit" />
                    </div>
                </form>
            </main>
        )
    }
}

export default  Main