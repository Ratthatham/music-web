const Track = ({activeSong, isPlaying, isActive}) => (
    
        <div className=" flex-1 flex items-center justify-start">
            <div className={`${!(isPlaying && isActive)? 'hidden':' animate-[spin_3s_linear_infinite]' } hidden sm:block h-16 w-16 mr-4` }>
                <img src={activeSong?.images?.coverart} alt='coverart'  className=' rounded-full'/>
            </div>        
            <div className=" w-[50%]">
                <p className=" truncate text-white font-bold text-lg">
                    {activeSong.title? activeSong.title: 'No active song'}
                </p>
                <p className=" truncate text-gray-300">
                    {activeSong.subtitle}
                </p>
            </div>
        </div>
)



export default Track;