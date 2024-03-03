import React from "react";
import Card from "./Card";


export default class ProjectCardContainer extends React.Component{
    render(){
        let cards = [
            {
                imageUrls:["https://picsum.photos/300/200","https://picsum.photos/301/200","https://picsum.photos/302/200"],
                test: "Card 1",
                description: "Description 1"
            },
            {
                imageUrls:["https://picsum.photos/303/200","https://picsum.photos/304/200","https://picsum.photos/305/200"],
                test: "Card 2",
                description: "Description 2"
            },
            {
                imageUrls:["https://picsum.photos/306/200","https://picsum.photos/307/200","https://picsum.photos/308/200"],
                test: "Card 3",
                description: "Description 3"
            },
            {
                imageUrls:["https://picsum.photos/309/200","https://picsum.photos/310/200","https://picsum.photos/311/200"],
                test: "Card 4",
                description: "Description 4"
            },
            {
                imageUrls:["https://picsum.photos/312/200","https://picsum.photos/313/200","https://picsum.photos/314/200"],
                test: "Card 5",
                description: "Description 5"
            }
        ];
        return (
            <div>
                <div className="flex justify-center align-middle">
                    <h1 className="pb-4 text-5xl font-semibold text-white">Projects</h1>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        cards.map( (card,index) => <Card key={index} imageUrls={card.imageUrls} title={card.test} description={card.description}/>)
                    }
                </div>
            </div>
            
        );
    }
}