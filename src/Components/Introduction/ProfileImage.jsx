import React from "react";


export default class ProfileImage extends React.Component{

    render(){
        return (
            <div className="flex justify-center align-middle w-fit">
                <div className="rounded">
                  <img className="" alt="Tailwind CSS Navbar component" src="./src/assets/avatar.png" />
                </div>
            </div>
        );
    }
}