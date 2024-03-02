import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default class GuestLayout extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <main>{this.props.children}</main>
                <Footer />
            </>
        );
    }
}