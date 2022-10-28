import { QrCode } from "@mui/icons-material";
import * as React from "react"
import QRCode from "react-qr-code";
import "./component.css"

interface ContactModalProbs {
    profileData: any,
    onClick: any
}

export default function ContactModal({
    profileData,
    onClick,
}: ContactModalProbs) {

    return(
        <div id="contact-modal">
            <div className="modal">
                <div className="modal-header">
                    <h1>{`${profileData.first_name} ${profileData.last_name}`}</h1>
                </div>
                <div className="qr-code-container">
                    {profileData.contact_insta &&
                        <div className="qr-code">
                            <QRCode className="qr" value={`https://www.instagram.com/${profileData.contact_insta}`} />
                            <h2 className="tag">Instagram: @{profileData.contact_insta} </h2>
                        </div>
                    }
                    {profileData.contact_kakao !== "" && 
                        <div className="qr-code">
                            <h2 className="tag">Kakao Talk: {profileData.contact_kakao} </h2>
                        </div>
                    }
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