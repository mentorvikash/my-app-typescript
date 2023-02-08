import React from 'react'

type propsType = {
    onHandleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button(props : propsType) {
  return (
    <button name="btn" onClick={(event) => props.onHandleClick(event, 12)} >Click ME</button>
  )
}

export default Button