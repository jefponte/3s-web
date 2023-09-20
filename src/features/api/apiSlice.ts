import { RootState } from './../../app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'http://127.0.0.1:8000/api';

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Services", "Divisions", "Users", "Orders"],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({}),
});














// import { RootState } from './../../app/store';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const baseUrl = 'http://localhost:8000/api';
// const token = '14|laravel_sanctum_3wduJgk6my9gOJ1fasqLtOJZEUBSWayz7igY95Qa9ada96f7';
// export const apiSlice = createApi({
//     reducerPath: "api",
//     tagTypes: ["Services", "Divisions", "Users", "Orders"],
//     endpoints: (builder) => ({}),
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//         prepareHeaders: (headers, getState) => {
//             console.log(getState);
//             // if(getState()?.auth?.token != null) {
//             //     headers.set("Authorization", `Bearer ${getState()?.auth?.token}`);
//             // }
//             return headers;
//         },
//     }),
// });