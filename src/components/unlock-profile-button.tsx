import * as React from "react"
import "./component.css"

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
            >x</button>
        </form>
    )
}