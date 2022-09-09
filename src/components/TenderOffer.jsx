import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {postOffer} from '../rest_api/RestApi'

import useTender from '../hooks/useTender';


export default function TenderOffer(props) {
    const {id} = useParams()
    const tenderHook = useTender(id, {actual: true})
    const [actualTender] = tenderHook.tender
    const [getTenderMessage] = tenderHook.message

    const [message, setMessage] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)

    let values = {}
    const handleChange = (event) => {
        values[event.target.name] = event.target.value;
    }

    const sendForm = (event) => {
        setMessage(<p>Wysyłam nową oferte...</p>)
        let errorMessage = <p>Wystąpił błąd spróbuj ponownie później.</p>
        // postOffer(values).then((response) => {
        //     if(response.ok) {
        //         setMessage(<p>Sukces - dodano nową oferte.</p>)
        //         setButtonDisabled(true)
        //     } else {
        //         setMessage(errorMessage)
        //     }
        // },
        // (reason) => {console.log('reason', reason)
        //     setMessage(errorMessage)
        // })
        event.preventDefault();
    }

    return (
        <div>
            {getTenderMessage}
            <h3>Dodaj oferte:</h3>
            <form className="tender-form" onSubmit={sendForm} onChange={handleChange}>

            <label htmlFor="submitterName">Nazwa podmiotu składającego ofertę:
            <input type="text" id="submitterName" name="submitterName" required />
            </label>

            <label htmlFor="value">Kwota:
            <input type="number" id="value" name="value" min="1" required />
            </label>

            <input type="submit" value="Dodaj" disabled={buttonDisabled}></input>
        </form>
        {message}
        </div>
    )
}