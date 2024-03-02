import React from 'react';
import HomeCardContainer from '../Components/HomeCardContainer';
import IntroductionContainer from '../Components/IntroductionContainer';

export default class Home extends React.Component {
    
    render() {
        const imagePath = "src/assets/introduction-container-bg.svg";

        return (
            <div className="min-h-screen hero" style={{backgroundImage: 'url('+imagePath+')'}}>
            <div className="bg-opacity-60 hero-overlay"></div>
                <IntroductionContainer/>
            </div>
        );
    }
}