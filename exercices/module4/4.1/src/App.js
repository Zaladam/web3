import {useRef, useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            id: 1,
            name: 'Arto Hellas',
            phone: '0045218421542'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setPhone] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) =>{
        setPhone(event.target.value)
    }

    const addPerson = (e) => {
        e.preventDefault()
        if (newName.trim() === '') {
            setNewName('')
            e.target.value = ''
            return alert(`No blank`)
        } else {

            for (const personsKey of persons) {

                if (personsKey.name === newName) {
                    return alert(`${newName} is already added to phonebook`)
                }
            }
            const newPerson = {
                id: persons.length + 1,
                name: newName,
                phone: newPhone
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setPhone('')
        }

    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>

                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(value => <li key={value.id}>{value.name} {value.phone}</li>
                )}
            </ul>

        </div>
    )
}

export default App