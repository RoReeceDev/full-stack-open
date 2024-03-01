import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    phone: '040-123456'
  }])

  const [newName, setNewName] = useState('')
  
  const [newPhone, setNewPhone] = useState('')

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
    }

    const dulplicate = (n) => {
      for (let i = 0; i < persons.length; i++) {
        if (JSON.stringify(n) === JSON.stringify(persons[i])) {
          return true
        } 
      }
    }

    if(dulplicate(nameObj)){
      alert(`${nameObj.name} is already added to the phonebook`)
    } else if (!dulplicate(nameObj)) {
      setPersons(persons.concat(nameObj))
    }

    setNewName('')
  }

  console.log(persons)

  return (
    <>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
      </ul>
    </>
  )
}

export default App
