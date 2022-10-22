import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'c735dba039msh966a299e7017b9fp17ed06jsn28c008b6b82c');
        return headers;
        },

    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongsDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: (songid) => `/tracks/related?track_id=${songid}`})
    })

})

export const {
    useGetTopChartsQuery, 
    useGetSongsDetailsQuery,
    useGetSongRelatedQuery
} = shazamCoreApi;


