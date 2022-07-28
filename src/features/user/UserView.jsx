import React from 'react'
import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import {useAppSelector,useAppDispatch} from '../../ForTesting/redux-hooks'
import {fetchUsers} from './userSlice';
import {useStore} from '../../app/store';


 const UserView = () => {

  const {usersZustand,fetchUsersZustand} = useStore(
    (state)=>({
      usersZustand :state.usersZustand,
      fetchUsersZustand :state.fetchUsersZustand
    })
  )


  // const user = useAppSelector((state) => state.user) 
  // const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('fetch users :',fetchUsers())
    // dispatch(fetchUsers());
    fetchUsersZustand()

  }, [])

  return (
    <div>
      <h2>List of Users</h2>
      {console.log('user.loading :',usersZustand.loading)}
      {usersZustand.loading && <div>loading</div>}
      {!usersZustand.loading && usersZustand.error?(<div>{usersZustand.error}</div>):''}
      {!usersZustand.loading && usersZustand.usersList.length >0 ? (
        <>
        {console.log("Users :",usersZustand.usersList)}
        <ul>
          {
            usersZustand.usersList.map(user=><li key ={user.id}>{user.id} : {user.name}</li>)
          }
        </ul>
        </>
      ):''}
    </div>
  )

}

export default UserView
