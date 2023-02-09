import React from 'react'

type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


function InputElement(props: inputProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <div>
            <input type="text" value={props.value} onChange={handleChange} />
        </div>
    )
}

export default InputElement