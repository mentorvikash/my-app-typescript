import React from 'react'

type prosType = {
    children: React.ReactNode
}

function Oscor(props: prosType) {
  return (
    <div>{props.children}</div>
  )
}

export default Oscor