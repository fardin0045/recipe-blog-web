
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import RecipeTitle from './components/OurRecipe/RecipeTitle'
import WantToCook from './components/WantToCook/WantToCook'

function App() {
  

  return (
    <>
    
      
      <div className='md:max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>

      <div className='md:flex justify-between '>
      <Cards ></Cards>
      <WantToCook></WantToCook>
      </div>
      </div>
      
    </>
  )
}

export default App
