import {useState, useEffect}  from 'react';
import {getTenders} from '../rest_api/RestApi'

export default function useResults(id) {
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState(<p>Ładowanie wyników...</p>);
    let endpoint = "/results/" + id

    useEffect(() => {
        let errorMessage = <p>Wystąpił błąd spróbuj ponownie później.</p>    
        getTenders(endpoint).then((response) => {
                if(response.ok) {
                    response.json().then(
                        (data) => {
                            setResults(data)
                            setMessage("")
                    })
                } else {
                    setMessage(errorMessage)
                    response.json().then(
                        (data) => {console.error('error:=', data)})
                }
            },
            (reason) => {
                    console.error({"getTenders error": reason})
                    setMessage(errorMessage)
            })

    }, [endpoint])

    return {"results": [results, setResults], "message": [message, setMessage]}
}