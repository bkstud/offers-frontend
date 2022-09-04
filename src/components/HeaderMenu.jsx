import {Link} from 'react-router-dom';
export default function HeaderMenu() {
    return (
    <div >
        <h1>Przetargi</h1>
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