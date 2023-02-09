import React from 'react'

type cssProps = {
    style: React.CSSProperties
}


function PassingCss(props: cssProps) {
    

    return (
        <div style={props.style}>
            Lets style this component
        </div>
    )
}

export default PassingCss