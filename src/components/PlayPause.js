import {AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

const PlayPause = ({song, handlePause, handlePlay, isPlaying, activeSong, size}) => (
    isPlaying && activeSong.title === song.title? 
        (<AiFillPauseCircle 
            size={size}
            className='text-gray-300'
            onClick={handlePause}/> )
        : (<AiFillPlayCircle 
            size={size}
            className='text-gray-300'
            onClick={handlePlay}/>)
)

export default PlayPause;