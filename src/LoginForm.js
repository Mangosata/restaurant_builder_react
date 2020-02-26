import * as React from "react";

const REQUEST_URL = 'http://localhost:8080/api/login';

export class LoginForm extends React.Component {
    ajaxLock = false;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    onSubmitClick = (event) => {
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

    usernameChangeHandler = (event) => {
        let target = event.target;
        let value = target.value;
        this.setState({username: value});
    };

    passwordChangeHandler = (event) => {
        let target = event.target;
        let value = target.value;
        this.setState({password: value});
    };

    render() {
        if (!this.state.submitted) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" onChange={this.usernameChangeHandler} value={this.state.username}
                               className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.passwordChangeHandler} value={this.state.password}
                               className="form-control"
                               id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitClick}>Submit</button>
                </form>
            );
        }

        return (<p>You've submitted successfully!</p>);
    }
}
