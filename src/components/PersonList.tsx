import React from 'react'
import { nameType } from './person.type'

type propType = { 
    nameList: nameType[]
}

function PersonList(props : propType) {
  return (
    <>
    {props.nameList.map(name => {
        return (
            <h2 key={name.fname}>{name.fname} {name.lname}</h2>
        )
    })}
    </>
  )
}

export default PersonList