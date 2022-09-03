export default function HeaderMenu() {
    return (
    <div >
        <h1>Przetargi</h1>
        <table className="header-menu-table" border="1">
        <tbody>
            <tr>
                <td><a href="/">Strona główna</a></td>
                <td><a href="/przetargi/aktualne">Aktualne przetargi</a></td>
                <td><a href="/przetargi/zakonczone">Lista zakończonych przetargów</a></td>
                <td><a href="/przetargi/dodaj">Dodaj przetarg</a></td>
            </tr>
        </tbody>
        </table>
    </div>
    )
}