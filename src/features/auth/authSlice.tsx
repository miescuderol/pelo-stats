import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserSessionData } from '../../services/types';

const slice = createSlice({
    name: 'auth',
    initialState: { userId: null, sessionId: null } as UserSessionData,
    reducers: {
        setSessionData: (
            state, 
            { payload: { user_id, session_id } }: PayloadAction<{user_id: string, session_id: string}>
        ) => {
            state.userId = user_id;
            state.sessionId = session_id;
        },
    },
})

export const { setSessionData } = slice.actions;
export default slice.reducer;
