export const API_BASE_URL = "https://agulite.herokuapp.com/api/v1"

export const getAxiosHeader = (bearerToken = null) => {
    return !bearerToken ? 
        { "Content-Type" : "application/json" } : 
            { "Content-Type" : "application/json", "Authorization" : `Bearer ${bearerToken}` }
}