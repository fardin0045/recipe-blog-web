import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{

        fetch('blog.json')
        .then(res => res.json())
        .then(data => setCards(data));

    },[])




    return (
        <div>
            <h2>Recipe:{cards.length} </h2>
            
               <div className="grid grid-cols-2" >{
                 cards.map(card => <Card 
                    key={card.id}
                    card ={card} 
                >

                </Card>)}
               </div>
            
        </div>
    );
};

export default Cards;