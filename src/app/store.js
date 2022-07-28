
import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axios from 'axios';


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user :userReducer
    },
})


// export const fetchUsersZustand = createAsyncThunk('user/fetchUsers',()=>{
//     return axios
//      .get('https://jsonplaceholder.typicode.com/users')
//      .then((res)=>{
//        return res.data;
//      })
//
//  })

 const storeZustand = (set) => ({
    numOfCakes :10,
    numOfIceCreams : 20,
    usersZustand :{
        loading :false,
        usersList :[],
        error :'',
    },

    fetchUsersZustand: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('Users response zustand : ',response)
        set((state)=>({
            usersZustand:{...state.usersZustand,usersList:response.data}
        }))
      },

    fetchUsers : ()=>{

    },

    orderedCake :()=>{
        set((state)=>({
            numOfCakes :state.numOfCakes-1
        }))
    },
    restockedCake :(qty)=>{
        set((state)=>({
            numOfCakes :state.numOfCakes +qty
        }))
    },
    orderedIcecream : ()=>{
        set((state)=>({
            numOfIceCreams : state.numOfIceCreams-1
        }))
    },
    restockedIcecream : (qty)=>{
        set((state)=>({
            numOfIceCreams :state.numOfIceCreams +qty
        }))
    },
})


export const useStore = create(
    devtools(
        persist(storeZustand, {
            name: 'cake'
        })
    )
)




export default store;