import {useParams} from 'react-router-dom';

import useTender from '../hooks/useTender';



export default function TenderOffer(props) {
    const {id} = useParams()
    const tenderHook = useTender(id, {actual: true})
    const [actualTender] = tenderHook.tender
    const [getTenderMessage] = tenderHook.message
    console.log('message:=', getTenderMessage)
    return (
        <div>
        {getTenderMessage}
            Oferta dla: {id}
        </div>
    )
}