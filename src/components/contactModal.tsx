import { QrCode } from "@mui/icons-material";
import * as React from "react"
import QRCode from "react-qr-code";
import "./component.css"

interface ContactModalProbs {
    contactData: any,
    onClick: any
}

export default function ContactModal({
    contactData,
    onClick,
}: ContactModalProbs) {

    return(
        <div id="contact-modal">
            <div className="modal">
                <div className="qr-code-container">
                    <div className="qr-code">
                        <QRCode value={`https://www.instagram.com/${contactData.instagram_id}`} />
                        <h2 className="tag">Instagram: @{contactData.instagram_id} </h2>
                    </div>
                    <div className="qr-code">
                        <QRCode value={`https://www.instagram.com/${contactData.kakao_id}`} />
                        <h2 className="tag">Kakao: {contactData.instagram_id} </h2>
                    </div>
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