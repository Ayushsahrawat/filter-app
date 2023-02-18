import React, {useState} from 'react'
import FilterPanel from '../../components/Home/FilterPanel/FilterPanel'
import List from '../../components/Home/List/List'
import SearchBar from '../../components/Home/SearchBar/SearchBar.jsx'
import './styles.css'


const Home = () => {
  // const [selectedCategory, setSelectedCategory]=useState(null);
  // const [selectedRating, setSelectedRating]=useState(null);

  // const handleSelectCategory = (event, value) => !value?null:setSelectedCategory()
  // const handleSelectRating = (event, value) => !value?null:setSelectedRating()

  return (
    <div className='home'>
      {/* search bar */}
      <div className="search-bar">
        searchbar
      <SearchBar />
      </div>
    <div className="home_panelList-wrap">
         <div className="home_panel-wrap"> 
             side panels
            {/* <FilterPanel 
            selectToggle={handleSelectCategory} 
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
             /> */}
        </div> 
        <div className="home_list-wrap">
            {/* list & Empty View  */}
            <List/>
        </div>
      </div>
    </div>
  )
}

export default Home
