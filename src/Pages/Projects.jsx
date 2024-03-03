import React from 'react';
import ProjectsContainer from '../Components/ProjectsContainer';

export default class Projects extends React.Component {
    render() {
        const imagePath = "/assets/bg-projects-page.svg";
        return (
            <div className="min-h-screen hero" style={{backgroundImage: 'url('+imagePath+')'}}>
            <div className="bg-opacity-60 hero-overlay"></div>
                <ProjectsContainer/>
            </div>
        );
    }
}