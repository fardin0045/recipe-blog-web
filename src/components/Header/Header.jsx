import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div className="flex justify-between  mt-10 align-middle ">
            <div>
                <h3 className="text-2xl font-bold">Recipe Calories</h3>
            </div>
            <div>
                <ul className="flex justify-between gap-6">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex">
            <IoSearch className="relative left-7 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                <input   className="bg-slate-100 rounded-2xl px-8" type="text" placeholder="Search"/>
                <CgProfile className="text-3xl  bg-[#0BE58A] rounded-full p-1 "  />
            </div>
        </div>
    );
};

export default Header;