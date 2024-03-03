import React from "react";
import Carousel from './Carousel';

export default class Card extends React.Component{
    
    render() {
        const { imageUrls, title, description } = this.props;
    
        return (
            <>
            <div className="w-96 rounded-lg shadow-xl bg-base-100">
                <div className="w-96 h-96">
                    <Carousel images={imageUrls}/>
                </div>
                <div className="card-body">
                    <h2 className="flex justify-center align-middle card-title">
                    {title}
                    </h2>
                    <p className="text-justify">{description}</p>
                </div>
            </div>
            </>
            
        );
    }
}

