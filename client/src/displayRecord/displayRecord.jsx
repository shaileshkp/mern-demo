import './displayRecord.css';

function DisplayRecord ({student}) {
    return (
        <>
            <h4 className='display_record_name'>Name: {student.name}</h4>
            <h5 className='display_record_class'>Class: {student.class}</h5>
        </>
    )
}

export default DisplayRecord;