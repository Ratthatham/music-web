import { configureStore} from "@reduxjs/toolkit";
import playerReducer from '../redux/features/playerSlice'
import { shazamCoreApi } from "./services/shazamCore";


const store = configureStore({
    reducer: {
        [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;