import * as React from "react";

const REQUEST_URL = 'http://localhost:8080/api/login';

export class LoginForm extends React.Component {
    ajaxLock = false;

    // timer = null;

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            logged: false
            // typing: 0,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (this.ajaxLock) {
            return;
        }

        this.ajaxLock = true;
        fetch(REQUEST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            this.ajaxLock = false;
            response.json().then(data => {
                this.setState({submitted: true});
                console.log(data);
            });
        });
    };

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

        fetch(REQUEST_URL, {
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
                console.log("Success:", data);
                // set token ->
                this.setState({logged: true});
                // redirect -> profile or home page
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
            return <p>You already logged.</p>;
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
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleInputChange}
                            value={this.state.username}
                            className="form-control col-9"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
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
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            className="form-control col-9"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button type="submit" className="btn btn-info">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
