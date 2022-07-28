import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading :false,
    users :[],
    error :''
}


export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
   return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      return res.data
    })
})



const userSlice = createSlice({
    name :'user',
    initialState :initialState,
    extraReducers :(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })   
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false ;
            state.user = [];
            state.error = action.error.message;
        }) 
       
    }
   
});

export const selectLoadingState = state => state.user.loading
export const selectUsersFetchStatus = state => state.user.users
export const selectUserFetchStatus = state => state.user.error

export default userSlice.reducer;
