const ArtistCard = ({track}) => {

    return(
        <div className=' flex flex-col w-[250px] p-4 bg-white bg-opacity-20  backdrop-blur-sm rounded-lg cursor-pointer select-none'>
            <div className='relative w-full h-56 group'>
                <img className=' w-full h-full rounded-lg' src={track?.images?.coverart} alt='track_img'/>
            </div>
            <div className=' mt-4 flex flex-col'>
                <p className=' text-ls font-semibold text-gray-300 mt-1'>
                        {track.subtitle}
                </p>
            </div>

        </div>
    )
}

export default ArtistCard;