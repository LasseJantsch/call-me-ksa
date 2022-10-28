import * as React from "react"
import {
  useState,
  useEffect,
  useRef
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
import IconButton from "../components/icon-button"
import LoadingAnimation from "../components/loading.animation"
import MessageModal from "../components/message-modal"
import halloween from "../images/halloween.png"



export default function Home() {

  const [international, setInternational] = useState(false)
  const [unlockProfile, setUnlockProfile] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [profileData, setProfileData] = useState([])
  const [koreanProfiles, setKoreanProfiles] = useState([])
  const [internationalProfiles, setInternationalProfiles] = useState([])
  const [searchProfiles, setSearchProfiles] = useState([])

  const [currentProfile, setCurrentProfile] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [visible, setVisible] = useState(true)
  const [autoChange, setAutoChange] = useState(true)
  const [unlockRespose, setUnlockResponse] = useState(-2)
  const [startAutoChange, setStartAutoChange] = useState(true)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")
  const [index, setIndex] = useState(0)
  const [disable, setDisable] = useState(false)
  const [active, setActive] = useState(null)
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
        setProfileData(result.data)
        setInternationalProfiles(result.data.filter((obj)=>{ return obj.nationality!=="Korean"}))
        setKoreanProfiles(result.data.filter((obj)=>{return obj.nationality==="Korean"}))
      },
      (error) => {
        console.log(error)
      },
      ()=>{
        setIsLoading(false)
        setSearchProfiles(profileData)
      }
    )
}, [])

useEffect(()=>{
  if(active==="korea") {
    setSearchProfiles(koreanProfiles)
    console.log("korea")
  } else if(active==="intern"){
    setSearchProfiles(internationalProfiles)
    console.log("international")
  } else {
    setSearchProfiles(profileData)
    console.log("all")
  }
}, [active, isLoading])

let timer

  function checkCodeInput(input) {
    if(input==="") return
    setDisable(true)
    api.checkUserCode(
      input,
      (result)=>{
          console.log(result.data.response)
          if(result.data.response > 0) {
            setAutoChange(false)
            setVisible(false)
            setTimeout(() => {
              setSearchProfiles(last => last)
              console.log(searchProfiles)
              setIndex(helpers.giveRandomeUserIndex(searchProfiles, profileData))
            }, 0.7 * 1000);
            setTimeout(()=>{
              setVisible(true) 
              setUnlockProfile(true)
            }, 2 * 1000 )
          } else if(result.data.response === 0) {
            setErrorText("No uses left :(")
            setTimeout(
              ()=>setError(true), 1000
            )
          } else if(result.data.response === -1) {
            setErrorText("This code doesnt exist!")
            setError(true)
          } else {
            setErrorText("Something went wrong")
            setError(true)
          }
      },
      (err)=>{
        console.log(err)
      },
      ()=>{
        setDisable(false)
          setTimeout(()=>{
            setError(false)
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
    <>
    <img className="background" src={halloween} alt="halloween" />
    <div
      className="wrapper"
    >
      <MessageModal 
        visible={error} 
        message_text={errorText}
       />
      {showDetails &&
        <ContactModal profileData={profileData[index]} onClick={setShowDetails}/>
      }
      <div className="navBar">
      </div>
      <div className="body">
          {
            isLoading ?
            <LoadingAnimation/>
            :
            <ProfileSlide profile={profileData[index]} visible={visible}/>          
          }
      </div>
      <div className="footer">
        <IconButton 
          active={active}
          setActive={setActive}
        />
        {unlockProfile?
          <UnlockProfileButton openModal={setShowDetails} continueSearch={handleContinueSearch}/>
        :
          <CodeInput onClick={checkCodeInput} disable={disable}/>
        }
      </div>

    </div>
    </>
  )
}
