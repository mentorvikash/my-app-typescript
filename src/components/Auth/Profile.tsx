import React from 'react'

export type profileProps = {
    name: string
}

function Profile({name}: profileProps) {
  return (
    <div>Private profile component..., the Name is {name}</div>
  )
}

export default Profile