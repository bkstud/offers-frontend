import {useState} from 'react';
import {DateTime} from 'luxon';
import {postTender} from '../rest_api/RestApi'

export default function TenderForm() {
    const [message, setMessage] = useState("")
    let values = {}
    const handleChange = (event) => {
        values[event.target.name] = event.target.value;
        console.log(message)
    }

    const sendForm = (event) => {
        console.log('submit', values);
        setMessage("<span>&times;</span>This is an alert box.")
        postTender(values)
        event.preventDefault();
    }
    var dateToday = DateTime.local()
    var dateTomorrow = DateTime.local().plus({days: 1})
    dateToday = dateToday.toISO().slice(0, -10)
    dateTomorrow = dateTomorrow.toISO().slice(0, -10)

    return (
        <div>
        <form className="tender-form" onSubmit={sendForm} onChange={handleChange}>
            
            <label htmlFor="name">Nazwa: 
            <input type="text" id="name" name="name" required />
            </label>

            <label htmlFor="begin">Data rozpoczęcia: 
            <input type="datetime-local" id="begin" name="begin" defaultValue={dateToday}  required />
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
            
            <input type="submit" value="Dodaj"></input>
            {message}
        </form>
        
        </div>
    )
}