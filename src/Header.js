import React, {Component} from 'react';

class Header extends Component {
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
                                    <li><a href={'/'} className={"nav-link"}>Home</a></li>
                                    <li><a href={'/profile'} className={"nav-link"}>Profile</a></li>
                                    <li><a href={'/login'} className={"nav-link"}>Login</a></li>
                                    <li><a href={'/logout'} className={"nav-link"}>Logout</a></li>
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

export default Header;
