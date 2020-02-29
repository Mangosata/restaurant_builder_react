import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <>
                <Header {...this.props}/>
                <main>
                    Home
                </main>
                <Footer {...this.props}/>
            </>
        );
    }
}

export default Home;
