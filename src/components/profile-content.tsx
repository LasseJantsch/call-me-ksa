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

    const data = profile
    
    return(
        <div id="profile-content">
            <h1>{`${data.first_name} ${data.last_name}`}</h1>
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
                    <text>{data.mbti}</text>
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
                            {data.hobbie_1 !== "" && <li>{data.hobbie_1}</li>}
                            {data.hobbie_2 !== "" && <li>{data.hobbie_2}</li>}
                            {data.hobbie_3 !== "" && <li>{data.hobbie_3}</li>}
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
                            {data.language_1 !== "" && <li>{data.language_1}</li>}
                            {data.language_2 !== "" && <li>{data.language_2}</li>}
                            {data.language_3 !== "" && <li>{data.language_3}</li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 className="question">{data.question_1}</h2>
                </div>
                <div>
                {data.answer_1}
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 className="question">{data.question_2}</h2>
                </div>
                <div>
                   {data.answer_1}
                </div>
            </div>
        </div>
    )
}