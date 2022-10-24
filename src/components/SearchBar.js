import { useState } from "react";
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from "react-router-dom"


const SearchBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    

    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value) ;
    }

    const onSubmit = () => {
        navigate(`/search/${searchTerm}`)
    }

    return(
        <form onSubmit={onSubmit} autoComplete="off" className=" ml-10 m-5 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className=" sr-only">
                Search all songs
            </label>
            <div className="flex flex-row justify-start items-center"> 
                <FiSearch className='w-5 h-5 ml-4'/>
                <input
                    name="search"
                    autoComplete="off"
                    // id="search-field"
                    type="Search"
                    value={searchTerm}
                    onChange={handleSearchTerm}
                    placeholder='Search'
                    className=" bg-transparent border-gray-300 outline-none placeholder-white text-base text-white pl-2 p-1 rounded-full ml-2"
                />
            </div>
        </form>
    )
}

export default SearchBar;