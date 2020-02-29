import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {REQUEST_ENDPOINT} from "./App";
import Loader from "./Loader";

export const TOKEN_KEY = 'tb23-token';

class AuthPage extends Component {
    token = null;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null
        };

        this.token = localStorage.getItem(TOKEN_KEY) || '';
    }

    componentDidMount() {
        if (!!this.token) {
            this.checkTokenValid();
        }
    }

    checkTokenValid() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 2000);
        // fetch(REQUEST_ENDPOINT + 'me', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authentication": `Bearer ${this.token}`
        //     }
        // }).then((response) => {
        //     this.setState({loading: false});
        //     response.json().then(data => {
        //         if (data.success) {
        //             this.setState({user: data.result});
        //             window.href = '/';
        //         } else {
        //             this.token = '';
        //             localStorage.removeItem(TOKEN_KEY);
        //         }
        //     });
        // });
    }

    render() {
        return (
            <>
                {this.state.loading && <Loader/>}
                <Header {...this.props}/>
                <main className="main">
                    {
                        !this.state.loading && (this.props.content)
                    }
                </main>
                <Footer {...this.props}/>
            </>
        );
    }
}

export default AuthPage;
