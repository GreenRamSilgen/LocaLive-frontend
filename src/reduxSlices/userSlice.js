import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        username:'',
        id:'',
        loggedIn: false,
        userToken:'',
        cart:[],
        cartTotal:0,
    },
    reducers:{
        setLoginTrue: state =>{
            state.loggedIn = true;
        },
        setLoginFalse: state =>{
            state.loggedIn = false;
        }
    }
});

export const {reducers} = userSlice.actions;

export default userSlice.reducer;