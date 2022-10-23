import { useState } from "react";
import { Navigate } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'


const SearchBar = () => {
    const [searchField, setSearchField] = useState('')
    

    const handleSearchField = (event) => (
        setSearchField(event.target.value)     
    )

    return(
        <form autoComplete="off" className=" ml-10 m-5 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className=" sr-only">
                Search all songs
            </label>
            <div className="flex flex-row justify-start items-center"> 
                <FiSearch className='w-5 h-5 ml-4'/>
                <input
                    name="search-field"
                    autoComplete="off"
                    id="search-field"
                    type="Search"
                    value={searchField}
                    onChange={handleSearchField}
                    placeholder='Search'
                    className=" bg-transparent border-gray-300 outline-none placeholder-white text-base text-white pl-2 p-1 rounded-full ml-2"
                />
            </div>
        </form>
    )
}

export default SearchBar;