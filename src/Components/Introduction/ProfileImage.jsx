import React from "react";


export default class ProfileImage extends React.Component{

    render(){
        return (
            <div className="flex justify-center align-middle">
                <div className="w-3/4 rounded">
                  <img alt="Tailwind CSS Navbar component" src="./src/assets/avatar.png" />
                </div>
            </div>
        );
    }
}