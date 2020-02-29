import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {TOKEN_KEY} from "./AuthPage";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem(TOKEN_KEY);
        this.props.history.push('/');
    };

    render() {
        return (
            <header className="header switched-header">
                <div className="header-section">
                    <div className="container-fluid ">
                        <nav className="navbar navbar-expand-lg header-navbar ">
                            <a className=" navbar-brand navbar-logo" href="/">
                                <img className="mb-0 logo-light" src="assets/svg/logo-light.svg" alt=""/>
                                <img className="mb-0 logo-dark" src="assets/svg/logo-dark.svg" alt=""/>
                            </a>
                            <button className="navbar-toggler btn-navbar-toggler" type="button"
                                    data-toggle="collapse"
                                    data-target=".nav-menu" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div
                                className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end py-0 ">
                                <ul className=" navbar-nav  header-navbar-nav ">
                                    <li><NavLink to={'/'} className={"nav-link"}>Home</NavLink></li>
                                    <li><NavLink to={'/profile'} className={"nav-link"}>Profile</NavLink></li>
                                    <li><NavLink to={'/login'} className={"nav-link"}>Login</NavLink></li>
                                    <li><a onClick={this.logout} className={"nav-link"}>Logout</a></li>
                                    <li className="ml-lg-auto">
                                        <a className=" nav-link nav-divider" href="index.html#reservation">
                                            <img src="assets/svg/ring-bell-light.svg" alt=""
                                                 className="max-width-xsm bell-light"/>
                                            <img src="assets/svg/ring-bell-dark.svg" alt=""
                                                 className="max-width-xsm bell-dark"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link pr-0" href="/">
                                            <span className="fa fa-phone mr-3"></span>
                                            613-333-5555
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
