import React from "react";
import Card from "./Card";


export default class HomeCardContainer extends React.Component{
    render(){
        let cards = [
            {
                imageUrl:"https://picsum.photos/300/200",
                test: "Card 1",
                description: "Description 1"
            },
            {
                imageUrl:"https://picsum.photos/301/200",
                test: "Card 2",
                description: "Description 2"
            },
            {
                imageUrl:"https://picsum.photos/302/200",
                test: "Card 3",
                description: "Description 3"
            },
            {
                imageUrl:"https://picsum.photos/303/200",
                test: "Card 4",
                description: "Description 4"
            },
            {
                imageUrl:"https://picsum.photos/304/200",
                test: "Card 5",
                description: "Description 5"
            }
        ];
        return (
            <>
            <div className="flex-1">
                <h1 className="text-3xl font-bold">Projects</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 center md:grid-cols-2 lg:grid-cols-3">
                {
                    cards.map( card => <Card imageUrl={card.imageUrl} title={card.test} description={card.description}/>)
                }
            </div>
            </>
            
        );
    }
}