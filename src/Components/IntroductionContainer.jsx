import React from "react";
import Description from "./Introduction/Description";
import ProfileImage from "./Introduction/ProfileImage";

export default class IntroductionContainer extends React.Component{
    render(){
        return (
            <div className="flex hero-content lg:flex-row-reverse">
                <ProfileImage />
                <Description/>
            </div>
        );
    }
}
