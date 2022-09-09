import {useState, useEffect}  from 'react';
import useTenders from './useTenders';


export default function useTender(id, {actual=false, finished=false}) {
    const tenderHook = useTenders({actual, finished})
    const [tenders] = tenderHook.tenders
    const setMessage = tenderHook.message[1]
    
    const [tender, setTender] = useState("")
    let name = ""
    if(actual) {
        name = "aktualnych"
    } else if(finished) {
        name = "zakończonych"
    }
    
    useEffect(() => {
        if(tenders) {
            let searched = tenders.find(tender => tender.id.toString() === id)
            if(! searched) {
                setMessage(<p>Przetarg z id: "{id}" nie został znaleziony na liście {name} przetargów.<br/>
                              Sprawdź listę zakończonych lub spróbuj ponownie później.
                           </p>)
            } else {
                setTender(searched)
            }
        }
    }
    , [tenders, id, setMessage. name])

    return {"tender": [tender, setTender], "message": tenderHook.message}
}