import * as React from "react"

interface messageModalProps {
    message_text: any,
    visible: boolean
}

export default function MessageModal({
    message_text,
    visible,
}: messageModalProps) {

    return(
        <div className={visible ? "message_modal slide_in" : "message_modal slide_out"}>
            <div className={"modal"}>
                <div>{message_text}</div>
            </div>
        </div>
    )
}