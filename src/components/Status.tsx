import React from 'react'

// this is example of union of string litrals
type propType= {
    status: 'loding' | 'success' | 'error' ,
}
  
function Status(props: propType) {
    let message;
    if (props.status === "loding"){
        message = 'loding...'
    }else if(props.status === "success"){
        message = 'Data loding sucessfully'
    }else if(props.status === "error"){
        message = 'Error fetching data'
    } 

  return (
    <div>
        <div>{message}</div>
    </div>
  )
}

export default Status