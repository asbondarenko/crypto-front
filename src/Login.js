import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const {email, password} = this.props.userData;

        axios
            .post(
                "http://127.0.0.1:8000/api/login",
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                },
            )
            .then(response => {
                this.props.handleChane(response);
            })
            .catch(error => {
                console.log("login error", error);
            });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.props.password}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;