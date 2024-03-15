import React from "react";


export default class PageBackground extends React.Component{
    
    
    render(){
        const {imagePath} = this.props;
        return (    
            <div className="grid top-0 left-0 place-items-center w-full h-full min-h-screen bg-center bg-cover" 
                 style={{backgroundImage: `url(${imagePath})`}}>
                <div className='absolute top-0 mt-16 w-full h-full bg-black bg-opacity-30'></div>
                <div className="relative z-20">
                    <slot></slot>
                </div>
            </div>
        );
    }
}