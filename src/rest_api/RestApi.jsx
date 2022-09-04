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

export {
    postTender,
}