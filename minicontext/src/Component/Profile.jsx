import React,{useContext} from 'react'
import UserContext from '../context/UseContext'

function Profile() {
  const {user}=React.useContext(UserContext)
  if(!user) return <div>please Login</div>

  return <div>welcom: {user.userName}</div>
}

export default Profile
