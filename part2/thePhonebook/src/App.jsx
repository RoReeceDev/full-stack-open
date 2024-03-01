import { useState } from 'react'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import ContactsList from './components/ContactsList'

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


  //Handle name input
  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  //Handle phone input
  const handlePhoneChange = (e) => {
    console.log(e.target.value)
    setNewPhone(e.target.value)
  }


  //Handle form submission and state update
  const addContact = (e) => {
    //prevent default reload
    e.preventDefault()

    //create object with new input data
    const nameObj = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    //Check for duplicate contact
    const dulplicate = (n) => {
      for (let i = 0; i < persons.length; i++) {
        if (JSON.stringify(n) === JSON.stringify(persons[i])) {
          return true
        }
      }
    }

    //If there is a duplicate alert user, if not add to phonebook
    if (dulplicate(nameObj)) {
      alert(`${nameObj.name} is already added to the phonebook`)
    } else if (!dulplicate(nameObj)) {
      setPersons(persons.concat(nameObj))
    }

    //Clear input box
    setNewName('')
  }

  //Handle search input
  const handleSearch = (e) => { 
    console.log(e.target.value)
    setSearchContact(e.target.value)
  }


  //Filter contat list with search
  const contactsToShow = searchContact ? persons.filter(person => person.name.toLowerCase().includes(searchContact.toLowerCase()))
  : persons


  return (
    <>
      <h2>Phonebook</h2>
      <Filter 
      value={searchContact} 
      onChange={handleSearch} />
      <AddContact 
      onSubmit={addContact} 
      newName={newName} 
      handleNameChange={handleNameChange} 
      newPhone={newPhone} 
      handlePhoneChange={handlePhoneChange} />
      <ContactsList contacts={contactsToShow} />
      </>
  )
}

export default App
