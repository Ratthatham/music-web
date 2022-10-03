
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Control = ({repeat, setRepeat, currentSongs}) => (
    <div className=' flex items-center justify-center md:w-36 lg:w-52 2xl:w-80'>
        <BsArrowRepeat 
            size={20} 
            color={ repeat? 'red': 'white'} 
            onClick = {() => setRepeat((prev)=>!prev)}
            className='hidden sm:block cursor-pointer'
        />
            
        <MdSkipPrevious size={30} className='cursor-pointer'/>
        <MdSkipNext/>
    </div>
)



export default Control;