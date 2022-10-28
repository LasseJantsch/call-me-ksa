import * as React from "react"
import "./component.css"
import cancle_icon from "../icons/cancle.svg"


interface UnlockProfileButtonProbs {
    openModal: any,
    continueSearch: any
}

export default function UnlockProfileButton({
    openModal,
    continueSearch,

}: UnlockProfileButtonProbs) {

    return(
        <form id="my-form">
            <button 
                id="unlock_profile" 
                onClick={(e)=>{
                    e.preventDefault()
                    openModal(true)
                }}            
            >{`Unlock Contact Details`}</button>
            <button
            id="continue_search"
             onClick={(e)=>{
                e.preventDefault()
                continueSearch()
            }}            
            ><img src={cancle_icon} alt="cancle" /></button>
        </form>
    )
}