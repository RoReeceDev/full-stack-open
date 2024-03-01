import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [ searchContact, setSearchContact ] = useState('')

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    console.log(e.target.value)
    setNewPhone(e.target.value)
  }

  const addContact = (e) => {
    e.preventDefault()

    const nameObj = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    const dulplicate = (n) => {
      for (let i = 0; i < persons.length; i++) {
        if (JSON.stringify(n) === JSON.stringify(persons[i])) {
          return true
        }
      }
    }

    if (dulplicate(nameObj)) {
      alert(`${nameObj.name} is already added to the phonebook`)
    } else if (!dulplicate(nameObj)) {
      setPersons(persons.concat(nameObj))
    }

    setNewName('')
  }

  const handleSearch = (e) => { 
    console.log(e.target.value)
    setSearchContact(e.target.value)
  }
 

  const contactsToShow = searchContact ? persons.filter(person => person.name.toLowerCase().includes(searchContact.toLowerCase()))
  : persons

  console.log(persons)

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <input 
        type="text"
        value={searchContact}
        onChange={handleSearch}
        />
      </div>
      <h3>Add a New Contact</h3>
      <form onSubmit={addContact}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          phone: <input
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {contactsToShow.map(person => <li key={person.id}>{person.name} {person.phone}</li>)}
      </ul>
    </>
  )
}

export default App
