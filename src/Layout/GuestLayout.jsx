import React from 'react';
import Navbar from '../Components/Navbar';

export default class GuestLayout extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <main>{this.props.children}</main>
            </>
        );
    }
}