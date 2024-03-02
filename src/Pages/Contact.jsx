import React from 'react';

export default class About extends React.Component {
    render() {
        const imagePath = "src/assets/bg-contacts-page.svg";
        return (
            <div className="min-h-screen hero" style={{backgroundImage: 'url('+imagePath+')'}}>
            <div className="bg-opacity-60 hero-overlay"></div>
                <p>Contact</p>
            </div>
        );
    }
}