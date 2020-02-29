import React, {Component} from 'react';

class Register extends Component {
    state = {
        formValue: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        errors: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        submitting: false
    };

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState(state => {
            return {
                formValue: {
                    ...state.formValue,
                    [name]: value
                }
            }
        });
    };

    handleSubmit = (e) => {
        //debugger;
        e.preventDefault();
        let {formValue} = this.state;
        console.log(formValue);
    };

    render() {
        let {formValue, errors} = this.state;
        let {username, password, confirmPassword} = formValue;
        return (
            <section id={"login-section"} className={"spacer-double-lg"} style={{backgroundColor: '#d3d3d3'}}>
                <div className={"container"}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-5 pb-5 text-left">
                            <h1 className="h2 font-alt">Register</h1>
                            <p className="w-md-75 mb-0 lead">Start to create your custom restaurant website now.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-5">
                                <label className="form-label">
                                    Email
                                    <span className="text-danger-alt">*</span>
                                </label>
                                <input className={`form-control`} type="text" name={"username"} value={username}
                                       onChange={this.handleInputChange}/>
                                {errors?.username && <div className="text-danger">{errors.username}</div>}
                            </div>
                            <div className="col-12 mb-5">
                                <label className="form-label">
                                    Password
                                    <span className="text-danger-alt">*</span>
                                </label>
                                <input className="form-control " type="password" name={"password"}
                                       placeholder="Password"
                                       value={password}
                                       onChange={this.handleInputChange}
                                />
                                {errors?.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <div className=" col-12 mb-5">
                                <label className="form-label">
                                    Confirm Password
                                    <span className="text-danger-alt">*</span>
                                </label>
                                <input className="form-control " type="password" name={"confirmPassword"}
                                       placeholder="Confirm Password"
                                       value={confirmPassword}
                                       onChange={this.handleInputChange}
                                />
                                {errors?.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                            </div>
                            <div className="col-12">
                                <div className="text-left">
                                    <button type="submit" className={`btn  btn-dark btn-wide`}
                                            disabled={this.state.submitting}>Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }

}

export default Register;
