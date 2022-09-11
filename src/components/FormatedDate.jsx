import {DateTime} from 'luxon';


export default function FormatedDate(props) {
    let isoDate = props.date.split(" ");
    let date = DateTime.fromISO(isoDate[0]+"T"+isoDate[1]+isoDate[2])
    
    return (
        <div>
            {date.setLocale('pl').toLocaleString({...DateTime.DATE_SHORT, hour: 'numeric', minute: '2-digit'})}
        </div>
    )
}