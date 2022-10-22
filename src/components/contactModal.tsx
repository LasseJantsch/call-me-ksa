import { QrCode } from "@mui/icons-material";
import * as React from "react"
import QRCode from "react-qr-code";
import "./component.css"

interface ContactModalProbs {
    instagram_id: string,
    onClick: any
}

export default function ContactModal({
    instagram_id,
    onClick,
}: ContactModalProbs) {

    return(
        <div id="contact-modal">
            <div className="modal">
                <div className="qr-code">
                    <QRCode value={`https://www.instagram.com/${instagram_id}`} />
                    <h2 className="tag">Instagram: @{instagram_id} </h2>
                </div>
                <button
                    onClick={()=>onClick(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}