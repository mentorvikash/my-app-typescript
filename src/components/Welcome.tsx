import React from 'react'

type propsType = {
    name: string,
    friends?: number,
    isKnown: boolean    
}


function Welcome(props: propsType) {
  const {friends = 0} = props
  return (
    props.isKnown ? <div>Welcome to {props.name}, we have {friends} friends</div> : <div>Welcome Friend</div>
  )
}

export default Welcome