import React from "react";
import ChartCard from "./ChartCard";


const SongBar = ({song, i, isPlaying, activeSong, data}) => {
    
    return (
        <div className=" w-full flex flex-row items-center my-2" >
                {/* <h3 className=" font-bold text-base text-white mr-3">{`${i+1}.`}</h3>
                <div className="flex-1 flex flex-row justify-between items-center">
                    <img src={song?.images?.coverart} alt={song.title}  className=' w-20 h-20 rounded-lg'/>
                </div>
                <div className="flex-1 flex flex-col justify-center mx-3">
                    <p className=" text-xl font-bold text-white">{song.title}</p>
                    <p className=" text-base text-gray-300 mt-1">{song.subtitle}</p>
                </div> */}
                <ChartCard
                    song={song}
                    i={i}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                />
        </div>
    )
    }



export default SongBar;