import {Link} from 'react-router-dom';

import useTenders from '../hooks/useTenders';
import FormatedDate from './FormatedDate';


export default function FinishedTenders() {
    const tenderHook = useTenders({finished: true})
    const [tenders] = tenderHook.tenders
    const [message] = tenderHook.message

    return (
    <div>
        <h3>Zakończone przetargi:</h3>
        {message}
        <table className="tenders-list-table" border="1">
        <tbody>
            <tr>
            <th>Liczba porządkowa</th>
            <th>Tytuł przetargu</th>
            <th>Rozpoczęcie</th>
            <th>Zakończenie</th>
            </tr>
            {tenders.map((tender) => (
                <tr key={tender.id}>
                <td><Link to={"/przetargi/zakonczone/" + tender.id} params={{"tender": tender}}>{tender.id}</Link></td>
                <td>{tender.name}</td>
                <td>Zakończono zbieranie ofert</td>
                <td>Zakończono zbieranie ofert</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    )
}