import {AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

const PlayPause = ({song, handlePause, handlePlay, isPlaying, activeSong}) => (
    isPlaying && activeSong.title === song.title? 
        (<AiFillPauseCircle 
            size={50}
            className='text-gray-300'
            onClick={handlePause}/> )
        : (<AiFillPlayCircle 
            size={50}
            className='text-gray-300'
            onClick={handlePlay}/>)
)

export default PlayPause;