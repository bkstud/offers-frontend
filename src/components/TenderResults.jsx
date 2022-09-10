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
            {message}
            {resultsMesage}
            Results of finished tender {tender.id} results= {results}
        </div>
    )
}
