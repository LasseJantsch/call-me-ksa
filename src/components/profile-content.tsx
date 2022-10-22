import * as React from "react"
import * as helpers from "../common/helpers"
import CakeIcon from '@mui/icons-material/Cake';
import PublicIcon from '@mui/icons-material/Public';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface profileContentProps{
    profile: any
}

export default function ProfileContent({
    profile,
}:profileContentProps) {

    const data = profile.data
    
    return(
        <div id="profile-content">
            <h1>{`${profile.first_name.charAt(0).toUpperCase() + profile.first_name.slice(1)} ${profile.last_name.charAt(0).toUpperCase() + profile.last_name.slice(1)}`}</h1>
            <div className="row-container container">
                <div className="icon-text">
                    <CakeIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <text>{data.birthday}</text>
                </div>
                <div className="icon-text">
                    <PublicIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <text>{data.nationality}</text>
                </div>
                <div className="icon-text">
                    <AccountCircleIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <text>{data.MBTI}</text>
                </div>
            </div>
            <div className="row-container container">
                <div>
                    <div className="row-container">
                        <SportsBasketballIcon sx={{color:"#4E4E4E"}} />
                        <h2>My hobbies are:</h2>
                    </div>
                    <div>
                        <ul>
                            {data.hobbies.map((e)=>{
                                return(
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="row-container">
                        <TranslateIcon sx={{color:"#4E4E4E"}} />
                        <h2>Languages I speak:</h2>
                    </div>
                    <div>
                        <ul>
                        {data.languages.map((e)=>{
                                return(
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 className="question">{data.question_1.question}</h2>
                </div>
                <div>
                {data.question_1.answer}
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 className="question">{data.question_2.question}</h2>
                </div>
                <div>
                   {data.question_2.answer}
                </div>
            </div>
        </div>
    )
}