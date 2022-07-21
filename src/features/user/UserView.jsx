import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers} from './userSlice';

 const UserView = () => {


  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>loading</div>}
      {!user.loading && user.error?(<div>{user.error.message}</div>):''}
      {!user.loading && user.users.length >0 ? (
        <ul>
          {
            user.users.map(user=><li key ={user.id}>{user.id} : {user.name}</li>)
          }
        </ul>
      ):''}
    </div>
  )

}

export default UserView
