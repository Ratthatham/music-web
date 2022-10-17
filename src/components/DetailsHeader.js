import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
    <div className="w-full flex flex-col">
        <div className=" ml-10 flex items-center sm:h-60 h-28">
            <img
                alt="profile"
                src={
                    artistId ? artistData?.artists[artistId].attributes?.artwork?.url
                    .replace('{w}', '500')
                    .replace('{h}', '500')
                    : songData?.images?.coverart
                }
                className=" ml-10 sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
            />

            <div className="ml-5">
                <p className="font-bold sm:text-3xl text-xl text-white">
                    {artistId ? artistData?.artists[artistId].attributes?.name : songData?.title}
                </p>

                {!artistId && (
                    <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
                    <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
                    </Link>
                )}

                <p className="text-base text-gray-400 mt-2">
                    {artistId
                    ? artistData?.artists[artistId].attributes?.genreNames[0]
                    : songData?.genres?.primary}
                </p>
            </div>
        </div>
    </div>
);

export default DetailsHeader;