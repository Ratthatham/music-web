import {AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

const PlayPause = ({song, handlePauseClick, handlePlayClick, isPlaying, activeSong, size}) => (
    isPlaying && activeSong.title === song.title? 
        (<AiFillPauseCircle 
            size={size}
            className='text-gray-300'
            onClick={handlePauseClick}/> )
        : (<AiFillPlayCircle 
            size={size}
            className='text-gray-300'
            onClick={handlePlayClick}/>)
)

export default PlayPause;