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
}

export default function ProfileSlide({

}: profileSlideProps) {

    const [img, setImg] = useState(null)
    const [index, setIndex] = useState(0)
    const [profileData, setProfileData] = useState([])
    const [currentProfile, setCurrentProfile] = useState({})

    const isLoading = !currentProfile || !img
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await import("../data/international.json")
                setProfileData(response.default)
                console.log(response.default)
            } catch (err) {
                console.log(err)
            } 
        }
        fetchData()
    }, [])

    useEffect(()=>{
        if(profileData[index] === undefined) return
        setCurrentProfile(profileData[index])
        // console.log(profileData[index])
    }, [profileData, index])
    
    useEffect(() => {
        if(currentProfile === undefined) return
        // console.log(currentProfile)
        helpers.importImg(currentProfile, setImg)
    }, [currentProfile])

    // useEffect(()=>{
    //     setTimeout(()=> {index<profileData.length ? setIndex(index+1) : setIndex(0)}, 10*1000 )
    // }, [index])


    return(
        <>
            {isLoading?
                <div id="profile-slider">
                    Is loading...
                </div>
                :
                <div id="profile-slider">
                    <div className="background">
                        <div className="content">
                            <ProfileContent 
                                profile = {currentProfile}
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