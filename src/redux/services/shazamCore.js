import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', `${process.env.REACT_APP_RAPID_API_KEY}`);
        return headers;
        },

    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongsDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: (songid) => `/tracks/related?track_id=${songid}`}),
        getSongByCountry: builder.query({query: (country) =>`/charts/country?country_code=${country}`}),
        getSongByGenre: builder.query({query: (genre) =>`/charts/genre-world?genre_code=${genre}`}),
        getSongBySearch: builder.query({query:(searchTerm) => `/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS`})
    })

})

export const {
    useGetTopChartsQuery, 
    useGetSongsDetailsQuery,
    useGetSongRelatedQuery,
    useGetSongByCountryQuery,
    useGetSongByGenreQuery,
    useGetSongBySearchQuery
} = shazamCoreApi;


