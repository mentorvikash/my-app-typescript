import React from 'react'
import { nameType } from './person.type'


function ExpotingType(props: nameType) {
  return (
    <div> {props.fname} {props.lname} </div>
  )
}

export default ExpotingType