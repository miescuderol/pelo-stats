import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

import { UserConfig, LoginResponse } from './types';

export const pelotonApi = createApi({
    reducerPath: 'peloton',
    tagTypes: ['Session', 'Workouts'],
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://localhost:3001/',
        prepareHeaders: (headers, { getState }) => {
            const sessionId = (getState() as RootState).auth.sessionId;
            // If we have a token set in state, let's assume that we should be passing it.
            if (sessionId) {
                console.log("setting cookie header")
                headers.set('authorization', `peloton_session_id=${sessionId}`);
            }
            return headers;
          },
    }),
    endpoints: (builder) => ({
        auth: builder.mutation<LoginResponse, UserConfig>({
            query: (userConfig: UserConfig) => ({
                    url: 'auth',
                    method: 'POST',
                    body: userConfig,
            })
        }),
        getUserWorkouts: builder.query<any, string>({
            query: (userId: string) => `user/${userId}/workouts`
        })
    })
})

export const { useAuthMutation, useGetUserWorkoutsQuery } = pelotonApi;