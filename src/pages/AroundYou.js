import { useEffect, useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import { useGetSongByCountryQuery } from "../redux/services/shazamCore";
import {Loader, Error, SongCard} from '../components';


const AroundYou = () => {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true)
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data: songByCountryData, isFetching, error} = useGetSongByCountryQuery(country)
    

    useEffect(()=>{
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_CN84yVGuZnFBzamYyWYYKjVAsIfbr')
        .then(res => setCountry(res.data.location.country))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
    },[country]);

    if(isFetching && loading ) return <Loader title='Loading songs around you'/>
    if(error && country) return <Error />


    return(
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className=" font-bold text-3xl text-white text-left ml-10">Around you <span>{country}</span></h2>
            </div>
            <div className=" text-white flex flex-wrap sm:justify-start justify-center gap-8 ml-10 ">
                {
                    songByCountryData?.map((song, i)=>(
                        <SongCard
                            key={song.key}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={songByCountryData}
                            song={song}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AroundYou;