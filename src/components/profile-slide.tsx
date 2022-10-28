import * as React from "react"
import {
    useState,
    useEffect,
    Component
} from "react"
import "./component.css"
import ProfileContent from "./profile-content"
import * as helpers from "../common/helpers"
// import profileData from "../data/international.json"
// import profilePicture from "../images/lasse_jantsch.jpg"



interface profileSlideProps {
    profile: any,
    visible: boolean,
}

export default function ProfileSlide({
    profile,
    visible
}: profileSlideProps) {

    const [img, setImg] = useState(null)
    // const [index, setIndex] = useState(0)
    // const [profileData, setProfileData] = useState([])
    // const [currentProfile, setCurrentProfile] = useState({})
    // const [timer, setTimer] = useState(true)

    const isLoading = !profile || !img
    
    // useEffect(()=>{
    //     if(profileData[index] === undefined) return
    //     setCurrentProfile(profileData[index])
    //     // console.log(profileData[index])
    // }, [profileData, index])
    
    useEffect(() => {
        if(profile === undefined) return
        // console.log(currentProfile)
        helpers.importImg(profile, setImg)
    }, [profile])

    // useEffect(()=>{
    //     while(timer === true) {
    //         console.log("triggered")
    //         setTimeout(()=> {index<profileData.length ? setIndex(index+1) : setIndex(0)}, 5*1000 )
    //     }
    // })


    return(
        <>
            {isLoading?
                <div id="profile-slider">
                    Is loading...
                </div>
                :
                <div id="profile-slider"  className={visible?"fadeIn":"fadeOut"}>
                    <div className="background_2">
                        <div className="content">
                            <ProfileContent 
                                profile = {profile}
                            />
                        </div>
                    </div>
                    <div className="image">
                        <img alt="profile picture" src={img} />
                    </div>
                </div>
            }
        </>
    )
}