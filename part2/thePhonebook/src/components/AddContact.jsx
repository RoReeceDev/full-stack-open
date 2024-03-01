const AddContact = ({ onSubmit, newName, newPhone, handleNameChange, handlePhoneChange}) => {
    return (
        <>
         <h3>Add a New Contact</h3>
      <form onSubmit={onSubmit}>
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
        </>
    )
}

export default AddContact