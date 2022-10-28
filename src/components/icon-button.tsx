import * as React from "react"
import korea_icon from "../icons/korea.png"
import intern_icon from "../icons/international.png"


interface iconButtonProbs {
    active: any,
    setActive: any,
    disabled?: boolean
}

export default function IconButton({
    active,
    setActive,
    disabled,
}: iconButtonProbs) {

    return(
        <div className="icon_button_container">
            <button 
                className={active === "korea" ? "icon_button active" : "icon_button"}
                disabled={disabled}
                onClick={()=>{
                    active === "korea" ? setActive(null) : setActive("korea")
                }}
                >
                <img src={korea_icon} id="korea-icon" alt="korean flag" />
            </button>
            <button 
                className={active === "intern" ? "icon_button active" : "icon_button"}
                disabled={disabled}
                onClick={()=>{
                    active === "intern" ? setActive(null) : setActive("intern")
                }}

                >
                <img src={intern_icon} id="intern-icon" alt="korean flag" />
            </button>
        </div>
    )
}