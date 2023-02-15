import { useContext } from "react"
import {TheameContext} from "./TheamContext"

export const Box = () =>{
    const theame = useContext(TheameContext)
    return <div style={{background: theame.primary.main, color: theame.primary.text}}>Theam Context</div>
}