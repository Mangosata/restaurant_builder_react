import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class OnePage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}/>
                <main className="main">
                    {this.props.content}
                </main>
                <Footer {...this.props}/>
            </>
        );
    }
}

export default OnePage;
