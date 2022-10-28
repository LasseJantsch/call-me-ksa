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
    function findQuestion(index) {
        if(index==="1") return "Would you rather fight 100 ducksize horses or one horse size duck?"
        if(index==="2") return "What is your favorite Halloween costume?"
        if(index==="3") return "What sports did you never do but really want to try?"
        if(index==="4") return "What is your favorite cafe in Deagu"
        if(index==="5") return "How many pillows do you sleep with?"
        if(index==="6") return "If you had a warning label, what would it say?"
        if(index==="7") return "What is your favorite music artist/group?"
        if(index==="8") return "What animal would you be?"
    }
    
    return(
        <div id="profile-content">
            <h1>{`${data.first_name} ${data.last_name}`}</h1>
            <div className="row-container container">
                <div className="icon-text">
                    <CakeIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <div>{data.birthday}</div>
                </div>
                <div className="icon-text">
                    <PublicIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <div>{data.nationality}</div>
                </div>
                <div className="icon-text">
                    <AccountCircleIcon fontSize="small" sx={{color:"#4E4E4E"}}/>
                    <div>{data.mbti}</div>
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
                            {data.hobby_1 !== "" && <li>{data.hobby_1}</li>}
                            {data.hobby_2 !== "" && <li>{data.hobby_2}</li>}
                            {data.hobby_3 !== "" && <li>{data.hobby_3}</li>}
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
                    <h2 className="question">{findQuestion(data.question_1)}</h2>
                </div>
                <div>
                {data.answer_1}
                </div>
            </div>
            <div className="container">
                <div>
                    <h2 className="question">{findQuestion(data.question_2)}</h2>
                </div>
                <div>
                   {data.answer_2}
                </div>
            </div>
        </div>
    )
}