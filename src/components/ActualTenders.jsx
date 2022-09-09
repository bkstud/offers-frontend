import {Link} from 'react-router-dom';

import useTenders from '../hooks/useTenders';
import FormatedDate from './FormatedDate';


export default function ActualTenders() {
    const tenderHook = useTenders({actual: true})
    const [tenders] = tenderHook.tenders
    const [message] = tenderHook.message

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
                <td><Link to={"/przetargi/aktualne/" + tender.id} params={{"tender": tender}}>{tender.id}</Link></td>
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