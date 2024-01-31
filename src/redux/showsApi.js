import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setShows } from './showSlice';

export const showsApi = createApi({
    reducerPath: 'showsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
    endpoints: (builder) => ({
      getAllShows: builder.query({
        query: (searchTerm) => `search/shows?q=all`,
        onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
          try {
            // Wait for the query to complete
            const { data } = await queryFulfilled;
            // Dispatch the setShows action with the result
            dispatch(setShows(data));
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        },
      }),
    }),
  });

  export const { useGetAllShowsQuery } = showsApi;
