import React from "react";
import Description from "./Introduction/Description";
import ProfileImage from "./Introduction/ProfileImage";

export default class IntroductionContainer extends React.Component{
    
    render(){
        const imagePath = "src/assets/introduction-container-bg.svg";
        return (
            <div className="min-h-screen hero" style={{backgroundImage: 'url('+imagePath+')'}}>
            <div className="bg-opacity-60 hero-overlay"></div>
            <div className="flex-col hero-content lg:flex-row-reverse">
                <ProfileImage />
                <Description/>
            </div>
            </div>
        )    
    }
}
