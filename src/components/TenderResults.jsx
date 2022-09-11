import {useParams} from 'react-router-dom';
import useResults from '../hooks/useResults';

import useTender from '../hooks/useTender';
import FormatedDate from './FormatedDate';


export default function TenderResults(props) {
    const {id} = useParams()
    const tenderHook = useTender(id, {finished: true})
    const [tender] = tenderHook.tender
    const [message] = tenderHook.message
    const resultsHook = useResults(id)
    const [results] = resultsHook.results
    const [resultsMesage] = resultsHook.message
    return (
        <div>
            {tender ? (
             <div>
                <h3>Rozstrzygnięcie przetargu '{tender.name}' :</h3>
             </div>
             )
              : ""}
            
            {message}
            {resultsMesage}
            
            {results.length === 0 ? (<h4>Brak roztrzygnięcia.</h4>) : (
                <div>
                <h4>Budżet projektu: {tender.budget}</h4>
                <table className="tenders-list-table" border="1">
                <tbody>
                    <tr>
                    <th>Liczba porządkowa</th>
                    <th>Nazwa podmiotu składającego ofertę</th>
                    <th>Czas złożenia</th>
                    <th>Kwota</th>
                    </tr>
                    {results.map((offer, index) => (
                        <tr key={offer.id}>
                        <td>{offer.id}</td>
                        <td>{offer.submitterName}</td>
                        <td><FormatedDate date={offer.submitTime}/></td>
                        <td>{offer.value}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            )}
        </div>
    )
}
