import * as React from "react"
import "./component.css"

interface buttonProps {
    lable: string,
    onClick: any,
    active?: boolean,
}

export default function Button({
    lable,
    onClick,
    active
}: buttonProps) {
    return(
        <div className="buttonContainer">
            <button
                className={active? "button active": "button"}
                onClick={onClick}
            >
                {lable}
            </button>
        </div>
    )
}