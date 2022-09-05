import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const __nameInLocalStorage__:string = "userEmail";

interface initialTypes {
    loginStatus:boolean
    email:string|null
    rememberPassword:boolean
}

const initialState: initialTypes = {
    loginStatus:localStorage.getItem(__nameInLocalStorage__)?true:false,
    email:localStorage.getItem(__nameInLocalStorage__) || null,
    rememberPassword:false

}
export const authenticationReducer = createSlice({
    name:'authentication',
    initialState,
    reducers: { 
        LOGOUT: state => {
            state.loginStatus = false;
            state.email = null;
            state.rememberPassword = false;
            if(localStorage.getItem(__nameInLocalStorage__))localStorage.removeItem(__nameInLocalStorage__);
        },
        LOGIN: (state, action:PayloadAction<{email:string, password?:string, rememberPassword:boolean}>) => {
            state.loginStatus = true;
            state.email = action.payload.email;
            state.rememberPassword = action.payload.rememberPassword;
            localStorage.setItem(__nameInLocalStorage__, action.payload.email);
        }
    }
});

export const { LOGIN, LOGOUT } = authenticationReducer.actions;
export default authenticationReducer.reducer;


