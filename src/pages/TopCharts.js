import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import {Loader, Error, SongCard} from '../components';

const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetTopChartsQuery()

    if(isFetching) return <Loader title='Loading songs around you'/>
    if(error) return <Error />


    return(
        <div className=" flex flex-col">
            <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className=" font-bold text-3xl text-white text-left ml-10">Top Charts</h2>
            </div>
            <div className=" text-white flex flex-wrap sm:justify-start justify-center gap-8 ml-10 ">
                {
                    data?.map((song, i)=>(
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

export default TopCharts;