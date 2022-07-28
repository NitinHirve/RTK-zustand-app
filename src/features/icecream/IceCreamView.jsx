import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './iceCreamSlice';

import {useAppSelector,useAppDispatch} from '../../ForTesting/redux-hooks'
import {useStore} from '../../app/store';


const IceCreamView = () => {

  const {numOfIceCreams,orderedIcecream,restockedIcecream} = useStore(
    (state)=>({
      numOfIceCreams :state.numOfIceCreams,
      orderedIcecream :state.orderedIcecream,
      restockedIcecream :state.restockedIcecream,
    })
  )

  const numOfIceCreamsRTK = useAppSelector((state)=>state.icecream.numOfIceCreams)
  console.log('numOfIceCreams :',numOfIceCreamsRTK)
  const dispatch = useAppDispatch()

  return (
    <div>
        <h2>Number of Ice cream - {numOfIceCreams} </h2>
        <button  onClick={()=>{orderedIcecream()}}>Order Ice cream</button>
        <button  onClick={()=>{restockedIcecream(2)}}>Restock Ice creams</button>
    </div>
  )
}

export default IceCreamView