import { useState } from 'react';

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
        event.preventDefault();
    }

    return (
        <div>
        <form className="tender-form" onSubmit={sendForm} onChange={handleChange}>
            
            <label htmlFor="name">Nazwa: 
            <input type="text" id="name" name="name" required />
            </label>

            <label htmlFor="begin">Data rozpoczęcia: 
            <input type="datetime-local" id="begin" name="begin" required />
            </label>
            
            <label htmlFor="end">Data zakończenia: 
            <input type="datetime-local" id="end" name="end" required />
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