  
const WantToCooks = ({ cook, index, handlePreparing }) => {
    const { recipe_name, preparing_time, calories } = cook;
  
    return (
      <tr className="border-b">
        <td className="px-2 py-2">{index}</td>
        <td className="px-2 py-2 text-sm">{recipe_name}</td>
        <td className="px-2 py-2 text-sm">{preparing_time} Minutes</td>
        <td className="px-2 py-2 text-sm">{calories} Calories</td>
        <td>
          <button
            onClick={() => handlePreparing(cook)} // Calls handlePreparing with the full recipe object
            className="bg-[#0BE58A] px-2 py-1 rounded-full hover:bg-violet-300 text-black font-medium mt-2"
          >
            Preparing
          </button>
        </td>
      </tr>
    );
  };
  
  export default WantToCooks;
  