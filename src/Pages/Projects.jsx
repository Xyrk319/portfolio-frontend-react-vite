import React from 'react';
import HomeCardContainer from '../Components/HomeCardContainer';

export default class Projects extends React.Component {
    render() {
        const imagePath = "src/assets/bg-projects-page.svg";
        return (
            <div className="min-h-screen hero" style={{backgroundImage: 'url('+imagePath+')'}}>
            <div className="bg-opacity-60 hero-overlay"></div>
                <HomeCardContainer/>
            </div>
        );
    }
}