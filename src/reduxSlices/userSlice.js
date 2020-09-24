import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        username:'',
        id:'',
        loggedIn: false,
        userToken:'',
    },
    reducers:{
        setLoginTrue: state =>{
            state.loggedIn = true;
        }
    }
});

export const {reducers} = userSlice.actions;

export default userSlice.reducer;