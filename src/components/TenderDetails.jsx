import {useParams, Link} from 'react-router-dom';

import useTender from '../hooks/useTender';
import FormatedDate from './FormatedDate';


export default function TenderDetails(props) {
    const {id} = useParams()
    const tenderHook = useTender(id, {actual: true})
    const [actualTender] = tenderHook.tender
    const [message] = tenderHook.message
    
    return (
        <div>
            {message}
            {actualTender ? 
                <div>
                    <h3>Informacje podstawowe</h3>
                    <table className="actual-tenders-list-table" border="1">
                    <tbody>
                        <tr>
                            <th>Liczba porządkowa</th>
                            <th>Tytuł przetargu</th>
                            <th>Rozpoczęcie</th>
                            <th>Zakończenie</th>
                        </tr>
                        <tr key={actualTender.id}>
                            <td>{actualTender.id}</td>
                            <td>{actualTender.name}</td>
                            <td><FormatedDate date={actualTender.begin}/></td>
                            <td><FormatedDate date={actualTender.end}/></td>
                        </tr>
                    </tbody>
                    </table>
                    <h3>Instytucja zamawiająca:</h3>
                    {actualTender.institution}
                    <h3>Opis:</h3>
                    <pre>
                        {actualTender.description ? actualTender.description : "Brak szczegółowego opisu."}
                    </pre>
                <h3><Link to={"/przetargi/aktualne/oferta/" + actualTender.id}>Złóż ofertę</Link></h3>
                </div>
                : ""
            }
        </div>
    )
}
