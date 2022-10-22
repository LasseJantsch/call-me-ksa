import * as React from "react"
import {
    useState
} from "react"
import "./component.css"

interface codeInputProps {
    onClick: any,
}

export default function CodeInput({
    onClick,
}: codeInputProps) {

    const [input, setInput] = useState("")

    return(
        <form id="my-form">
            <input 
            type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button 
                onClick={(e)=>{
                    e.preventDefault()
                    onClick(input)
                    setInput("")
                }}
            >{`>`}</button>
        </form>
    )
}