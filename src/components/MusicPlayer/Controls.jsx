
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

const Control = ({isPlaying, repeat, setRepeat, currentSongs, handleNextSong, handlePrevSong, shuffle, setShuffle, handlePlayPause}) => {
    console.log(isPlaying);
    return(
        <div className=' flex items-center justify-center md:w-36 lg:w-52 2xl:w-80'>
            <BsArrowRepeat 
                size={20} 
                color={ repeat? 'red': 'white'} 
                onClick = {() => setRepeat((prev)=>!prev)}
                className='hidden sm:block cursor-pointer'
            />
                
            <MdSkipPrevious size={30} color={'white'} className='cursor-pointer' onClick={handlePrevSong}/>
            {
                isPlaying? <BsFillPauseFill size={40} color={'white'} className=' cursor-pointer' onClick={handlePlayPause}/> : <BsFillPlayFill size={40} color={'white'} className=' cursor-pointer' onClick={handlePlayPause}/>
            }
            <MdSkipNext size={30} color={'white'} className=' cursor-pointer' onClick={handleNextSong}/>
            <BsShuffle size={20} color={shuffle? 'red' : 'white'} className=' hidden sm:block cursor-pointer' onClick={() => setShuffle((prev)=>!prev)}/>
        </div>   
    )
}



export default Control;