const ContactsList = ({contacts}) => {
    return (
        <>
            <h3>Numbers</h3>
            <ul>
                {contacts.map(person => <li key={person.id}>{person.name} {person.phone}</li>)}
            </ul>
        </>
    )
}

export default ContactsList