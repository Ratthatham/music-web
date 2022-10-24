import { useSelector } from "react-redux";
import { useGetSongBySearchQuery } from "../redux/services/shazamCore";
import {Loader, Error, SongCard} from '../components';
import { useParams } from "react-router-dom";

const Search = () => {
    const {searchTerm} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetSongBySearchQuery(searchTerm)
    const songs = data?.tracks?.hits?.map((song)=>song.track);

    if(isFetching) return <Loader title='Loading songs around you'/>
    if(error) return <Error />

    return(
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className=" font-bold text-3xl text-white text-left ml-10"> Searching Result for <span>{searchTerm}</span></h2>
            </div>
            <div className=" text-white flex flex-wrap sm:justify-start justify-center gap-8 ml-10 ">
                {
                    songs?.map((song, i)=>(
                        <SongCard
                            key={song.key}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={data}
                            song={song}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Search;