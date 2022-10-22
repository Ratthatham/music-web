import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import PlayPause from "./PlayPause"
import { Link } from "react-router-dom"




const ChartCard = ({song, i, isPlaying, activeSong, data}) => {
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true))
    }

    return (
        <div className=" w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2">
                <h3 className=" font-bold text-base text-white mr-3">{`${i+1}.`}</h3>
                <div className="flex-1 flex flex-row justify-between items-center">
                    <img src={song?.images?.coverart} alt={song.title}  className=' w-20 h-20 rounded-lg'/>
                </div>
                <div className="flex-1 flex flex-col justify-center mx-3">
                    <Link to={`/songs/${song.key}`}>
                        <p className=" text-xl font-bold text-white">{song.title}</p>
                    </Link>
                    <p className=" text-base text-gray-300 mt-1">{song.subtitle}</p>
                </div>
                <PlayPause 
                    song={song}
                    handlePlayClick={handlePlayClick}
                    handlePauseClick={handlePauseClick}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    size={30}
                />
        </div>
    )
    }

    export default ChartCard;