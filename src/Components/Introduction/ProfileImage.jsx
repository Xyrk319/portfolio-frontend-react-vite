import React from "react";


export default class ProfileImage extends React.Component{

    render(){
        return (
            <div className="flex justify-centeralign-middle w-fit">
                <div className="rounded">
                  <img className="ml-32" alt="Tailwind CSS Navbar component" src="./src/assets/avatar.png" />
                </div>
            </div>
        );
    }
}