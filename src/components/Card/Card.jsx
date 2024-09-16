import './Card.css'
import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const Card = ({card}) => {
    const {recipe_id,image,recipe_name, short_description,ingredients,preparing_time,calories,} = card;
    return (
        <div className=" align-middle p-10  m-4 card w-96 border-2 rounded-xl">
          <div className="space-y-4">
          <img className='rounded-xl' src={image} alt="" />
          <h2 className="text-xl font-semibold" >{recipe_name}</h2>
          <p className="text-base ">{short_description}</p>
          <hr />
          <h2 className="text-lg font-medium ">Ingredients:</h2>
          <ul className="list-disc pl-5">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <div className='flex justify-between'>
        <div  className='flex gap-2'>
        <IoIosTimer className='pt-1 text-xl' /> {preparing_time}
        </div>
        <div className='flex gap-2'>
        <FaFire className='text-xl ' /> {calories};
        </div>
        </div>
          <button  className=" bg-[#0BE58A] p-3 px-5 rounded-3xl hover:bg-violet-300 text-black font-medium" >Want to Cook</button>
          </div>
           
        </div>
    );
};

export default Card;