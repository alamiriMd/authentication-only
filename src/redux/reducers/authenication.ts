import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const __nameInLocalStorage__:string = "userEmail";

interface initialTypes {
    value:boolean
    user: {email:string|null}
    
}

const initialState: initialTypes = {
    value:localStorage.getItem(__nameInLocalStorage__)?true:false,
    user: {
        email:localStorage.getItem(__nameInLocalStorage__) || null
    }
}
export const authenticationReducer = createSlice({
    name:'authentication',
    initialState,
    reducers: { 
        LOGOUT: state => {
            state.value = false;
            state.user = {
                email:null
            };
            if(localStorage.getItem(__nameInLocalStorage__))localStorage.removeItem(__nameInLocalStorage__);
        },
        LOGIN: (state, action:PayloadAction<{email:string, password?:string, rememberPassword?:boolean}>) => {
            state.value = true;
            state.user.email = action.payload.email;
            localStorage.setItem(__nameInLocalStorage__, action.payload.email);
        }
    }
});

export const { LOGIN, LOGOUT } = authenticationReducer.actions;
export default authenticationReducer.reducer;


