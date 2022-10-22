import React from "react";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongsDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';


const SongDetails = () => {
   
    const dispatch = useDispatch();
    const {songid, id: artistId} = useParams();
    const {isPlaying, activeSong} = useSelector((state)=>state.player)
    const {data: songData, isFetching: isFetchingSongDetails} = useGetSongsDetailsQuery(songid);
    const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery(songid );
    if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;
    // console.log(songid)
    // console.log(songData)
    if (error) return <Error />;

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, songData, i }));
        dispatch(playPause(true));
    };

    return(
        <div className=" flex flex-col ">
            <DetailsHeader 
                songData={songData} 
                artistId={''}
            />
            
            <div className=" w-full flex justify-center items-center flex-col mt-4 mb-10">
                <div className="w-full">
                    <h2 className=" text-white text-3xl font-bold text-center ">Lyrics</h2>
                </div>

                <div className=" mt-5 text-center">
                    {
                        songData?.sections[1].type === 'LYRICS'? 
                        songData?.sections[1].text.map((line, i)=>(
                            <p key={i} className=" text-white text-base my-1 ">{line}</p>
                        )) : <p className=" text-white text-base my-1">Sorry There're not Lyrics Song</p>
                    }
                </div>
               
            </div>
            <div className="">
                <RelatedSongs 
                    data={data}
                    isPlaying={isPlaying}    
                    activeSong={activeSong}
                    artistId={artistId}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />
            </div>

          
        </div>
    )
}

export default SongDetails;