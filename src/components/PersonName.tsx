import React from 'react'

type propType = {
    fname: string,
    lname: string
}

function PersonName(props: propType) {
  return (
    <div>{props.fname} {props.lname}</div>
  )
}

export default PersonName