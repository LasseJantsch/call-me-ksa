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
  const [startAutoChange, setStartAutoChange] = useState(true)
  const [index, setIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
        try {
            const response = await import("../data/international.json")
            setProfileData(response.default)
            console.log(response.default)
        } catch (err) {
            console.log(err)
        } finally{
          setIsLoading(false)
        }
    }
    fetchData()
}, [])

let timer


function checkCodeInput(input) {
  if(input === "1234") {
    setAutoChange(false)
    setVisible(false)
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * (profileData.length)))
    }, 0.7 * 1000);
    setTimeout(()=>{
      setVisible(true) 
      setUnlockProfile(true)
    }, 2 * 1000 )

  } else {
    return
  }
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
        <ContactModal contactData={profileData[index].data.contact_detail} onClick={setShowContactDetails}/>
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
        {unlockProfile?
          <UnlockProfileButton openModal={setShowContactDetails} continueSearch={handleContinueSearch}/>
        :
          <CodeInput onClick={checkCodeInput} />
        }
      </div>

    </div>
  )
}
