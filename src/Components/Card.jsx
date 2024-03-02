import React from "react";


export default class Card extends React.Component{

    render() {
        const { imageUrl, title, description } = this.props; // Destructure props for easy access
    
        return (
            <>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageUrl}/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    </h2>
                    <p>{description}</p>
                </div>
                </div>
            </>
        );
    }
}

