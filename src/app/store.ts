import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pelotonApi } from '../services/peloton';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        [pelotonApi.reducerPath]: pelotonApi.reducer,
        auth: authReducer,
    },


});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
