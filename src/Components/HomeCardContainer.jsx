import React from "react";
import Card from "./Card";


export default class HomeCardContainer extends React.Component{
    render(){
        let cards = [
            {
                imageUrl:"https://picsum.photos/200/300",
                test: "Card 1",
            },
            {
                imageUrl:"https://picsum.photos/201/300",
                test: "Card 2",
            },
            {
                imageUrl:"https://picsum.photos/202/300",
                test: "Card 3",
            },
            {
                imageUrl:"https://picsum.photos/203/300",
                test: "Card 4",
            },
            {
                imageUrl:"https://picsum.photos/204/300",
                test: "Card 5",
            }
        ];
        return (
            <>
            <div className="flex-1">
                <h1 className="text-3xl font-bold">Projects</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 center md:grid-cols-2 lg:grid-cols-3">
                {
                    cards.map( card => <Card imageUrl={card.imageUrl} title={card.test}/>)
                }
            </div>
            </>
            
        );
    }
}