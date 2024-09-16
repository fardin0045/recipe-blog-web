
import WantToCooks from "./WantToCooks";

const WantToCook = ({wantedCook, currentlyCooking,handlePreparing}) => {

    const totalTime = currentlyCooking.reduce(
        (total, cook) => total + cook.preparing_time,0
    );
    const totalCalories =currentlyCooking.reduce(
        (total, cook) => total + cook.calories,0
    );
  
    return (
        <div className="border-2 w-1/3 h-fit px-12 rounded-xl mt-5 pr-10">
            <div>
            <h2 className="text-2xl font-semibold text-center p-4 ">Want to Cook :{wantedCook.length}</h2>
            </div>
            <hr />
            <table className="table-auto w-full text-left  text-[#878787]">
               <thead>
                <tr>
                <th className="px-2 py-2">#</th> {/* Column for the counter */}
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                </tr>
               </thead>
               <tbody>
               {
                wantedCook.map((cook, idx)=>
                <WantToCooks key={idx} 
                cook={cook}
                index ={idx +1}
                handlePreparing={handlePreparing}
                ></WantToCooks>
                )
            }
               </tbody>
            </table>
            <hr className="text-xl" />
            <h2 className="text-2xl font-semibold text-center mt-5">Currently Cooking :{ currentlyCooking.length} </h2>
            <hr />
            <table className="table-auto w-full text-left  text-[#878787]">
               <thead className="" >
                <tr className="flex justify-between" >
                <th className="px-2 py-2 ">#</th> {/* Column for the counter */}
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <hr />
                </tr>
               </thead>
               <tbody>
                {
                    currentlyCooking.map((cook, index) =>(
                        <ol key={index}> 
                        <td className="px-2 py-2 text-sm">{cook.recipe_name}</td>
                        <td className="px-2 py-2 text-sm">{cook.preparing_time} Minutes</td>
                        <td className="px-2 py-2 text-sm">{cook.calories} Calories</td>
                        </ol>
                    ) )
                }
               </tbody>
             </table>  
             <hr />
            <div className="mt-5  mb-5 flex justify-around  text-[#878787] ">
                <p className="font-medium">Total time :{totalTime}</p>
                <p className="font-medium">Total calories :{totalCalories}</p>
            </div>
            
            
        </div>
        
    );
};

export default WantToCook;
