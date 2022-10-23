import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Error, Loader, SongCard} from '../components'
import {genres} from '../assets/constants'
import {useGetSongByGenreQuery} from '../redux/services/shazamCore'
import { selectGenreListId } from '../redux/features/playerSlice'


const Discover = () => {
    const dispatch = useDispatch() 
    const [genreValue, setGenreValue] = useState('Pop')   
    const {activeSong, isPlaying, genreListId} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetSongByGenreQuery(genreListId);

    const handleOnchange = (e) => {
        setGenreValue(e.target.value)
    }

    useEffect(()=>{
        let itemSelected = genres.filter((item, i)=>{
            return item.title === genreValue
        })
        dispatch(selectGenreListId(itemSelected[0].value))
    })

    if(isFetching){
        return (
            <Loader title={'Songs is loading...'}/>
        )
    }

    if(error){
        return(
            <Error/>
        )
    }
    
    return(
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className=" font-bold text-3xl text-white text-left ml-10">Discover {genreValue}</h2>
                
                <select
                    onChange={handleOnchange}
                    value = {genreValue}
                    className=" bg-white text-gray-400 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre)=> <option key={genre.value} value={genre.title}>{genre.title}</option>)}
                </select>
            </div>
            <div className=" text-white flex flex-wrap sm:justify-start justify-center gap-8 ml-10 ">
                {
                    data?.map((song, index)=>(
                        <SongCard 
                            key={song.key} 
                            song={song} 
                            i={index}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Discover;