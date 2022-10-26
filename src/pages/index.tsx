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
import * as helpers from "../common/helpers"
import * as api from "../common/api"
import "./page.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Home() {

  const [international, setInternational] = useState(false)
  const [unlockProfile, setUnlockProfile] = useState(false)
  const [showContactDetails, setShowContactDetails] = useState(false)
  const [profileData, setProfileData] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [visible, setVisible] = useState(true)
  const [autoChange, setAutoChange] = useState(true)
  const [unlockRespose, setUnlockResponse] = useState(null)
  const [startAutoChange, setStartAutoChange] = useState(true)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [index, setIndex] = useState(0)
  const [disable, setDisable] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  useEffect(()=>{
    setIsLoading(true)
    api.getAllProfiles(
      (result)=> {
        console.log(result.data)
        setProfileData(result.data)
      },
      (error) => {
        console.log(error)
      },
      ()=>{
        setIsLoading(false)
      }
    )
}, [])

let timer


function checkCodeInput(input) {
  if(input==="") return
  setDisable(true)
  api.checkUserCode(
    input,
    (result)=>{
      if(result.data.usercode === input) {
        console.log(result.data)
        setUnlockResponse(result.data.response)
      }
    },
    (err)=>{
      console.log(err)
    },
    ()=>{
      if(unlockRespose > 0) {
        console.log("worked well: " + unlockRespose)
        setAutoChange(false)
        setVisible(false)
        setTimeout(() => {
          setIndex(Math.floor(Math.random() * (profileData.length)))
        }, 0.7 * 1000);
        setTimeout(()=>{
          setVisible(true) 
          setUnlockProfile(true)
        }, 2 * 1000 )
      } else if(unlockRespose === 0) {
        console.log("no uses left: " + unlockRespose)
        setError(true)
      } else if(unlockRespose === -1) {
        console.log("code doesnt exist: " + unlockRespose)
        setError(true)
      } else {
        console.log("something is wrong with the response: " + unlockRespose)
      }
      setTimeout(()=>{
        setError(false)
        setDisable(false)
      }, 5 * 1000)
    }
  )
}

function handleContinueSearch() {
  setVisible(false)
  setUnlockProfile(false)
  setTimeout(()=>{
    setIndex(Math.floor(Math.random() * (profileData.length)))
  }, 0.7 * 1000 )
  setTimeout(()=>{
    setVisible(true) 
    setAutoChange(true)
  }, 2 * 1000 )
}

const updateIndex = () => {
  timer = !timer && setInterval(() => {
    // console.log('ticking')
      if (autoChange===true) {
        setVisible(false)
        setTimeout(()=>{
          setIndex(Math.floor(Math.random() * (profileData.length))) 
        }, 0.7 *1000)
        setTimeout(()=>setVisible(true), 2 *1000) 
  
      }
    },
    5 * 1000
  )
}

useEffect(() => {
  updateIndex()
  console.log(index)

  return () => clearInterval(timer)
}, [index, autoChange, profileData])



  return(
    <div
      className="wrapper"
    >
      {showContactDetails &&
        <ContactModal contactData={profileData[index]} onClick={setShowContactDetails}/>
      }
      <div className="navBar">
        <Button
          lable="Korean"
          active = {!international}
          onClick={()=>{setAutoChange(false)}}
        />
        <Button
          lable="International"
          active = {international}
          onClick={()=>{setVisible(!visible)}}
        />
      </div>
      <div className="body">
          {
            isLoading ?
            <div>Loading</div>
            :
            <ProfileSlide profile={profileData[index]} visible={visible}/>          
          }
      </div>
      <div className="footer">
        {error && 
          <div className="error">The Code didn't work</div>
        }
        {unlockProfile?
          <UnlockProfileButton openModal={setShowContactDetails} continueSearch={handleContinueSearch}/>
        :
          <CodeInput onClick={checkCodeInput} disable={disable}/>
        }
      </div>

    </div>
  )
}
