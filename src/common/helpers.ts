
import * as React from "react"
import no_picture from "../images/no_picture.jpg"

export async function importImg(profile:any, setImg:any) {
    try {
        const response = await import('../images/'+ profile.user_code +".jpg")
        setImg(response.default)
    } catch (err) {
        setImg(no_picture)
    } 
}

export function createUserName(profile) {
    const userName = `${capitalizeFirstLetter(profile.first_name)} ${capitalizeFirstLetter(profile.last_name)}`
    return userName
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

