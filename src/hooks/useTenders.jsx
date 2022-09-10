import {useState, useEffect}  from 'react';
import {getTenders} from '../rest_api/RestApi'

export default function useTenders({actual=false, finished=false}) {
    const [tenders, setTenders] = useState([]);
    const [message, setMessage] = useState(<p>Ładowanie przetargów...</p>);
    let endpoint = "/"
    if(actual) {
        endpoint = "/actual"
    } else if(finished) {
        endpoint = "/finished"
    }

    useEffect(() => {
        let errorMessage = <p>Wystąpił błąd spróbuj ponownie później.</p>    
        getTenders(endpoint).then((response) => {
                if(response.ok) {
                    response.json().then(
                        (data) => {
                            setTenders(data)
                            setMessage("")
                    })
                } else {
                    setMessage(errorMessage)
                    response.json().then(
                        (data) => {console.error('error:=', data)})
                }
            },
            (reason) => {
                    console.log({"getTenders error": reason})
                    setMessage(errorMessage)
            })

    }, [endpoint])

    return {"tenders": [tenders, setTenders], "message": [message, setMessage]}
}