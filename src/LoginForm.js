import * as React from "react";
import {REQUEST_ENDPOINT} from "./App";
import {TOKEN_KEY} from "./AuthPage";

export class LoginForm extends React.Component {
    ajaxLock = false;

    // timer = null;

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            logged: false,
            // typing: 0,
            message: ""
        };
    }

    onKeyPress = event => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.ajaxLock) {
            return;
        }

        this.ajaxLock = true;

        fetch(REQUEST_ENDPOINT + 'login', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => {
                this.ajaxLock = false;
                return response.json();
            })
            .then(data => {
                if (data.result) {
                    // set token ->
                    this.setState({logged: true});
                    // redirect -> profile or home page
                    localStorage.setItem(TOKEN_KEY, `Bearer ${data.result}`);
                } else {
                    this.setState({message: data.message});
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    handleInputChange = event => {
        let {target} = event;
        this.setState({[target.name]: target.value});

        if (target.name !== "username") {
            return;
        }

        // if (this.timer) {
        // this.setState({typing: 1});
        // clearTimeout(this.timer);
        // }
        // this.timer = setTimeout(() => {
        // this.setState({typing: -1});
        // setTimeout(() => {
        //     this.setState({typing: 0});
        // }, 2000);
        // }, 800);
    };

    render() {
        if (this.state.logged) {
            return <p>You already logged, redirecting...</p>;
        }
        return (
            <div className="login-form-container">
                <form
                    id="login_form"
                    onSubmit={this.handleSubmit}
                    onKeyPress={this.onKeyPress}
                >
                    <div className="form-group row">
                        <label className="col-3" htmlFor="exampleInputEmail1">
                            Email
                        </label>
                        <div className="form-input col-9">
                            <input
                                type="text"
                                name="username"
                                onChange={this.handleInputChange}
                                value={this.state.username}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="col-9 ml-auto">
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-3" htmlFor="exampleInputPassword1">
                            Password
                        </label>
                        <div className="form-input col-9">
                            <input
                                type="password"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                    </div>
                    {!!this.state.message && (
                        <div className="message">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-info">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
