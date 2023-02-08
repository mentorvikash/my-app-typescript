import React from 'react'

type propType = { 
    nameList: {
        fname: string,
        lname: string
    }[]
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