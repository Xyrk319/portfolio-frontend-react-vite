import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default class GuestLayout extends React.Component {

    render() {
        return (
            <div className="flex flex-col h-screen"> 
                <Navbar />
                <main className="flex-grow">{this.props.children}</main> 
                <Footer />
            </div>
        );
    }
}