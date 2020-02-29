import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    Home
                </main>
                <Footer />
            </>
        );
    }
}

export default Home;
