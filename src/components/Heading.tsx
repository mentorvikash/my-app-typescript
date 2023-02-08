import React from 'react'

type propsType = {
    children: string,
}

function Heading(props: propsType) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading