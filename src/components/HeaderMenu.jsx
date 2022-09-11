import {Link} from 'react-router-dom';
import Clock from 'react-live-clock';

export default function HeaderMenu() {
    return (
    <div>
        <div className='title'>
        <span className='name'>Przetargi</span>
        <span className='date'><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Warsaw'} /></span>
        </div>
        <table className="header-menu-table" border="1">
        <tbody>
            <tr>
                <td><Link to="/">Strona główna</Link></td>
                <td><Link to="/przetargi/aktualne">Aktualne przetargi</Link></td>
                <td><Link to="/przetargi/zakonczone">Lista zakończonych przetargów</Link></td>
                <td><Link to="/przetargi/dodaj">Dodaj przetarg</Link></td>
            </tr>
        </tbody>
        </table>
    </div>
    )
}