import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    access: null,
    refresh: null,
    isAuthenticated: false,
    user: null,
};

// Check for tokens in AsyncStorage during initial state setup
AsyncStorage.getItem('access').then((token) => {
    if (token) {
        initialState.isAuthenticated = true;
        initialState.access = token;
    }
});

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const access = action.payload.access_token;
            const refresh = action.payload.refresh_token;
            const user = action.payload.user_data;

            // Store tokens asynchronously
            AsyncStorage.setItem('access', access);
            AsyncStorage.setItem('refresh', refresh);
            
            state.access = access;
            state.refresh = refresh;
            state.user = user;
            state.isAuthenticated = true;
        },
        loginFail(state) {
            // Remove tokens asynchronously
            AsyncStorage.removeItem('access');
            AsyncStorage.removeItem('refresh');
            
            state.access = null;
            state.refresh = null;
            state.user = null;
            state.isAuthenticated = false;
        },
        logout(state) {
            // Remove tokens asynchronously
            AsyncStorage.removeItem('access');
            AsyncStorage.removeItem('refresh');
            
            state.access = null;
            state.refresh = null;
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { loginSuccess, loginFail, logout } = loginSlice.actions;
export default loginSlice.reducer;
