
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import PlayPause from '../components/PlayPause';




const SongCard = ({song, i, isPlaying, activeSong, data}) => {
    const dispatch = useDispatch();
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true))
    }

    return(
        <div className=' flex flex-col w-[250px] p-4 bg-white bg-opacity-20  backdrop-blur-sm rounded-lg cursor-pointer select-none'>
            <div className='relative w-full h-56 group'>
                <div className={` absolute inset-0 justify-center items-center bg-black bg-opacity-20 group-hover:flex ${activeSong?.title === song.title? 'flex bg-black bg-opacity-70':'hidden'}`}>
                    <PlayPause 
                        handlePauseClick = {handlePauseClick} 
                        handlePlayClick={handlePlayClick}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        size={50}
                    />
                </div>
                <img className=' w-full h-full rounded-lg' src={song?.images?.coverart} alt='song_img'/>
            </div>
            
            <div className=' mt-4 flex flex-col'>
                <p className=' font-semibold text-lg text-white truncate'>
                    <Link to={`/songs/${song.key}`}>
                        {song.title}
                    </Link>
                </p>
                <p className=' text-sm truncate text-gray-300 mt-1'>
                    <Link to={song.artists? `/artists/${song.artists[0].adamid} `:'/top-artists'}>
                        {song.subtitle}
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default SongCard;