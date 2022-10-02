import React from "react";
import {Error, Loader, SongCard} from '../components'
import {genres} from '../assets/constants'
import {useGetTopChartsQuery} from '../redux/services/shazamCore'

const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery();
    console.log(data);

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
                <h2 className=" font-bold text-3xl text-white text-left">Discover</h2>
                <select
                    onChange={()=>{}}
                    value = ''
                >
                    {genres.map((genre)=> <option key={genre.value} value={genre.title}>{genre.title}</option>)}
                </select>
            </div>
            <div className=" text-white flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    [1,2,3,4,5,6].map((song, index)=>(
                        <SongCard key={song.key} song={song} i={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Discover;