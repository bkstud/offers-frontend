const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS || "http://localhost:3001"


const getApiUrl = () => {
    return BACKEND_ADDRESS + "/api/v1"
}

async function postTender(tender) {
    return fetch(getApiUrl() + "/tender/new", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tender)
                })
}

async function postOffer(offer) {
    return fetch(getApiUrl() + "/offer/new", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(offer)
                })
}

async function getTenders(subpath="/") {
    return fetch(getApiUrl() + "/tender" + subpath, {
                    method: "GET",
                })
}

export {
    postTender,
    getTenders,
    postOffer
}