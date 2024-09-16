
import PropTypes from 'prop-types';
import './Card.css';
import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Card = ({ card, handleWantToCook }) => {
    const {image, recipe_name, short_description, ingredients, preparing_time, calories } = card;

    return (
        <div className="align-middle p-10 m-4 card w-96 border-2 rounded-xl">
            <div className="space-y-4">
                <img className='rounded-xl' src={image} alt={recipe_name} />
                <h2 className="text-xl font-semibold">{recipe_name}</h2>
                <p className="text-base">{short_description}</p>
                <hr />
                <h2 className="text-lg font-medium">Ingredients:</h2>
                <ul className="list-disc pl-5 text-[#878787]">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <IoIosTimer className='pt-1 text-xl' /> {preparing_time}
                    </div>
                    <div className='flex gap-2'>
                        <FaFire className='text-xl' /> {calories}
                    </div>
                </div>
                <hr />
                <button onClick={() => handleWantToCook(recipe_name,preparing_time,calories,)}  className=" bg-[#0BE58A] p-3 rounded-3xl hover:bg-violet-300 text-black font-semibold"> Want to Cook</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.shape({
        recipe_id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired
    }).isRequired
};

export default Card;
