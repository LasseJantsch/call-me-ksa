import * as React from "react"
import {
  useState,
  useEffect
} from "react"
import UnlockProfileButton from "../components/unlock-profile-button"
import ContactModal from "../components/contactModal"
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "../components/button"
import CodeInput from "../components/code-input"
import ProfileSlide from "../components/profile-slide"
import "./page.css"




export default function Home() {

  const [international, setInternational] = useState(false)
  const [unlockProfile, setUnlockProfile] = useState(false)
  const [showContactDetails, setShowContactDetails] = useState(false)

  function checkCodeInput(input) {
    if(input === "1234") {
      setUnlockProfile(true)
      console.log(unlockProfile)
    } else {
      return
    }
  }

  return(
    <div 
      className="wrapper"
    >
      {showContactDetails &&
        <ContactModal instagram_id="lassejantsch" onClick={setShowContactDetails}/>
      }
      <div className="navBar">
        <Button 
          lable="Korean"
          active = {!international}
          onClick={()=>{setInternational(false)}}
        />
        <Button 
          lable="International"
          active = {international}
          onClick={()=>{setInternational(true)}}
        />
      </div>
      <div className="body">
        <ProfileSlide/>
      </div>
      <div className="footer">
        {unlockProfile? 
          <UnlockProfileButton openModal={setShowContactDetails} continueSearch={setUnlockProfile}/>
        :
          <CodeInput onClick={checkCodeInput} />
        }
      </div>

    </div>
  )
}
