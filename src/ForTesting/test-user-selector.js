
import iceCreamReducer from '../features/icecream/iceCreamSlice';


const state = {
    user :{
        loading :false,
        users :[],
        error :''
    },
    icecream:{
    numOfIceCreams : 40
    }
}







export const  textUseIceCreamSelector = (f)=>f(state);