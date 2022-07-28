import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked}  from './cakeSlice'

import {useStore} from '../../app/store';



const CakeView = () => {

  const {numOfCakes,orderedCake,restockedCake} = useStore(
    (state)=>({
      numOfCakes :state.numOfCakes,
      orderedCake :state.orderedCake,
      restockedCake :state.restockedCake,

    })
  )

    const numOfCakesRTK = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()


  return (
    <div>
        <h2>Number of Cakes - {numOfCakes} </h2>
        <button onClick = {()=>orderedCake()}>Order Cake</button>
        <button onClick  = {()=>restockedCake(10)}>Restock Cakes</button>
    </div>
  )
}

export default CakeView