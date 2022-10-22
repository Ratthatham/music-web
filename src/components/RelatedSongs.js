import React from "react";
import SongBar from "./SongBar";

const RelatedSongs = ({data, isPlaying, activeSong, artistId}) => {
    return(
        <div className=" flex flex-col ml-10">
            <h1 className=" font-bold text-2xl text-white "> Related Songs</h1>
            <div className="mt-6 w-full flex flex-col">
                {
                    data?.map((song, i)=>(
                        <SongBar
                            key={`${song.key}-${artistId}`}
                            song={song}
                            i = {i}
                            artistId={artistId}
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

export default RelatedSongs;