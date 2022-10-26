import axios from "axios"

export function getAllProfiles(
    handleResult: any,
    handleError: any,
    executefinally?: any,
){
    axios.get(
        "https://knu.dasistjaabsolutnichtmehrinmo.de/get.php?usercode=all"
        )
        .then(handleResult)
        .catch(handleError)
        .finally(!!executefinally && executefinally)
}
export function getOneProfile(
    user_id: string,
    handleResult: any,
    handleError: any,
    executefinally?: any,
){
    axios.get(
        `https://knu.dasistjaabsolutnichtmehrinmo.de/get.php?usercode=${user_id}`
        )
        .then(handleResult)
        .catch(handleError)
        .finally(!!executefinally && executefinally)
}

export function checkUserCode(
    user_id: string,
    handleResult: any,
    handleError: any,
    executefinally?: any,
){
    axios.get(
        `https://knu.dasistjaabsolutnichtmehrinmo.de/check.php?usercode=${user_id}`
        )
        .then(handleResult)
        .catch(handleError)
        .finally(!!executefinally && executefinally)
}
