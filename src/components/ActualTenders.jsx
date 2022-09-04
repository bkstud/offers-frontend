import {useEffect, useState} from 'react';
import {getTenders} from '../rest_api/RestApi'
import FormatedDate from './FormatedDate';
export default function ActualTenders() {
    const [tenders, setTenders] = useState([])
    const [message, setMessage] = useState(<p>Ładowanie przetargów...</p>)

    useEffect(() => {
        let errorMessage = <p>Wystąpił błąd spróbuj ponownie później.</p>
        
        getTenders("/actual").then((response) => {
                if(response.ok) {
                    response.json().then(
                        (data) => {
                            console.log(data)
                            setTenders(data)
                            setMessage("")
                    })
                } else {
                    setMessage(errorMessage)
                }
            },
            (reason) => {
                    console.log({"getTenders error": reason})
                    setMessage(errorMessage)
            })

    }, [])

    return (
    <div>
        <h3>Aktualne przetargi:</h3>
        {message}
        <table className="actual-tenders-list-table" border="1">
        <tbody>
            <tr>
            <th>Liczba porządkowa</th>
            <th>Tytuł przetargu</th>
            <th>Rozpoczęcie</th>
            <th>Zakończenie</th>
            </tr>
            {tenders.map((tender) => (
                <tr key={tender.id}>
                <td>{tender.id}</td>
                <td>{tender.name}</td>
                <td><FormatedDate date={tender.begin}/></td>
                <td><FormatedDate date={tender.end}/></td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    )
}