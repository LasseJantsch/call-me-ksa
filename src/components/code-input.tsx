import * as React from "react"
import {
    useState
} from "react"
import "./component.css"

interface codeInputProps {
    onClick: any,
    disable: boolean,
}

export default function CodeInput({
    onClick,
    disable
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
            >{`>`}</button>
        </form>
    )
}