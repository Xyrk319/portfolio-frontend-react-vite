import React from "react";
import Description from "./Introduction/Description";
import ProfileImage from "./Introduction/ProfileImage";

export default class IntroductionContainer extends React.Component{
    
    render(){
        const imagePath = "src/assets/introduction-container-bg.svg";
        return (
            <div style={{ backgroundImage: `url(${imagePath})` }}
                className="relative h-5/6 bg-no-repeat bg-cover"
            >
                <div className="grid grid-cols-3 place-content-center pt-16 h-full">
                    <div className="col-span-2">
                        <Description/>
                    </div>
                    <div className="col-span-1">
                        <ProfileImage/>
                    </div>
                </div>
            </div>
        )    
    }
}
