import * as React from "react"
import {
    useState
} from "react"
import "./component.css"
import arrow_right from "../icons/arrow-right.svg"

interface codeInputProps {
    onClick: any,
    disable: boolean,
}

export default function CodeInput({
    onClick,
    disable,
}: codeInputProps) {

    const [input, setInput] = useState("")

    return(
        <form id="my-form">
            <input 
            type="text" 
            disabled = {disable}
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button 
                onClick={(e)=>{
                    e.preventDefault()
                    onClick(input)
                    setInput("")
                }}
            ><img src={arrow_right} alt="arrow-right"/></button>
        </form>
    )
}