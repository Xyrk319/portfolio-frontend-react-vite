import React from "react";


export default class Card extends React.Component{

    render() {
        const { imageUrl, title } = this.props; // Destructure props for easy access
    
        return (
            <div className="flex relative justify-center items-center w-64 h-64 rounded-lg" 
                style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <h3 className="z-10 text-xl font-bold text-white">{title}</h3>
            </div>
        );
    }
}