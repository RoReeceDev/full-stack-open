import { useState } from 'react'

function App() {
  const [ persons, setPersons ] = useState([{
    name: 'Arto Hellas',
    id: 1
  }])

  const [ newName, setNewName ] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()

    const nameObj = {
      name: newName,
      id: persons.length + 1
    }
    
    setPersons(persons.concat(nameObj))
    setNewName('')
  }

  console.log(persons)

  return (
    <>
     <h2>Phonebook</h2>
     <form onSubmit={addName}>
      <div>
        name: <input 
        value={newName}
        onChange={handleChange}
        />
      </div>
      <div>debug: {newName}</div>
      <div>
        <button type="submit">add</button>
      </div>
     </form>
     <h2>Numbers</h2>
     <ul>
      {persons.map(person => <li key={person.id}>{person.name}</li>)}
     </ul>
    </>
  )
}

export default App
