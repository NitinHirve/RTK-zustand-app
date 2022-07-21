import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './iceCreamSlice';

const IceCreamView = () => {


  const numOfIceCreams = useSelector((state)=>state.icecream.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Ice cream - {numOfIceCreams} </h2>
        <button onClick={()=>{dispatch(ordered())}}>Order Ice cream</button>
        <button onClick={()=>{dispatch(restocked(5))}}>Restock Ice creams</button>
    </div>
  )
}

export default IceCreamView