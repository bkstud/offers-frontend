import { useParams } from 'react-router-dom';

export default function TenderDetails(props) {
    const tender = props.tender;
    console.log(props)
    const {id} = useParams()
    console.log('id:=', id)
    return (
        <div>
            Foo
        </div>
    )
}
