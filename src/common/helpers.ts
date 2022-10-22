

export async function importImg(profile:any, setImg:any) {
    try {
        const response = await import('../images/'+ profile.first_name +"_" + profile.last_name +".jpg")
        setImg(response.default)
    } catch (err) {
        console.log(err)
    } 
}

export function createUserName(profile) {
    const userName = `${capitalizeFirstLetter(profile.first_name)} ${capitalizeFirstLetter(profile.last_name)}`
    return userName
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

