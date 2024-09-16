
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import RecipeTitle from './components/OurRecipe/RecipeTitle'
import WantToCook from './components/WantToCook/WantToCook'

function App() {
  const [wantedCook,setWantedCook ] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);


  const handleWantToCook = (recipe_name, preparing_time, calories) =>{
    const newRecipe = {recipe_name, preparing_time, calories};
     const newWantToCookList = [...wantedCook, newRecipe];
     setWantedCook(newWantToCookList);
     
  }

  const handlePreparing = (cook) => {
    const updatedWantedCook = wantedCook.filter((item) => item.recipe_name !== cook.recipe_name);
    setWantedCook(updatedWantedCook);
    setCurrentlyCooking([...currentlyCooking, cook]);
     
  }

  return (
    <>
    
      
      <div className='md:max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>

      <div className='md:flex justify-between '>
      <Cards handleWantToCook={handleWantToCook}
      
      ></Cards>
      <WantToCook wantedCook={wantedCook} 
      handlePreparing={handlePreparing} 
      currentlyCooking={currentlyCooking}
      ></WantToCook>
      </div>
      </div>
      
    </>
  )
}

export default App
