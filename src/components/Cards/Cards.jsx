import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const Cards = ({handleWantToCook,handlePreparing}) => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{

        fetch('blog.json')
        .then(res => res.json())
        .then(data => setCards(data));

    },[])




    return (
        <div>
            {/* <h2>Recipe:{cards.length} </h2> */}
            
               <div className="grid grid-cols-2" >{
                 cards.map(card => <Card 
                    key={card.id}
                    card ={card} 
                    handleWantToCook ={handleWantToCook}
                    handlePreparing={handlePreparing}
                >

                </Card>)
            }
               </div>
            
        </div>
    );
};
Cards.propTypes ={
    handleWantToCook : PropTypes.func

}

export default Cards;