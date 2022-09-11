import {useState} from 'react';
import {DateTime} from 'luxon';
import {postTender} from '../rest_api/RestApi'

export default function TenderForm() {
    const [message, setMessage] = useState("")
    const [formDisabled, setDisabled] = useState(false)

    let values = {}
    const handleChange = (event) => {
        values[event.target.name] = event.target.value;
    }

    const sendForm = (event) => {
        setMessage(<p>Wysyłam nowy przetarg...</p>)
        let errorMessage = <p>Wystąpił błąd spróbuj ponownie później.</p>
        postTender(values).then((response) => {
            if(response.ok) {
                setMessage(<p>Sukces - dodano nowy przetarg.</p>)
                setDisabled(true)
            } else {
                setMessage(errorMessage)
            }
        },
        (reason) => {console.log('reason', reason)
            setMessage(errorMessage)
        })
        event.preventDefault();
    }

    let dateToday = DateTime.local()
    dateToday.set({hour: 23, minute: 59})
    let dateTomorrow = DateTime.local().plus({days: 1})
    dateToday = dateToday.toISO().slice(0, -13)
    dateTomorrow = dateTomorrow.toISO().slice(0, -13)
    values["begin"] = dateToday
    values["end"] = dateTomorrow

    return (
        <div>
        <h3>Dodaj przetarg:</h3>
        <form className="tender-form" onSubmit={sendForm} onChange={handleChange}>

            <label htmlFor="name">Nazwa:
            <input type="text" id="name" name="name" required />
            </label>

            <label htmlFor="begin">Data rozpoczęcia:
            <input type="datetime-local" id="begin" name="begin" format-value='yyyy-MM-ddTHH:mm' defaultValue={dateToday} required />
            </label>

            <label htmlFor="end">Data zakończenia:
            <input type="datetime-local" id="end" name="end" defaultValue={dateTomorrow} required />
            </label>


            <label htmlFor="budget">Budżet:
            <input type="number" id="budget" name="budget" min="1" required />
            </label>

            <label htmlFor="institution">Podmiot przeprowadzający:
            <input type="text" id="institution" name="institution" required />
            </label>


            <label htmlFor="description">Opis (opcjonalne):
            <textarea id="description" name="description" rows="8" cols="40"></textarea>
            </label>

            <input type="submit" value="Dodaj" disabled={formDisabled}></input>
        </form>
            {message}
        </div>
    )
}