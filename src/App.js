import './App.css';
import { useState, useEffect } from 'react';
import { Contacts } from "./components/Contacts"
import { Phonebook } from "./components/Phonebook"
import contactsData from "./contacts.json";


function App() {
  const [contacts, setContacts] = useState([])
  const [filter, changeFilter] = useState('')

 const deleteContact = (id) => {
  setContacts(prevContacts =>
    prevContacts.filter(contact => contact.id !== id)
  );
};

const addContact = (name, number) => {
  const newId = contacts.length + 1;

  const newContact = {
    id: `id-${newId}`,
    name: name,
    number: number
  };

  setContacts(prevContacts => [...prevContacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const saved = localStorage.getItem('contacts');

    if (saved === '[]' || !saved) {
      localStorage.setItem(
        'contacts',
        JSON.stringify(contactsData.contacts)
      );
      setContacts(contactsData.contacts);
    } else {
        setContacts(JSON.parse(saved));
    }
  }, []);

  let visibleContacts;
  if (contacts === null) {
    localStorage.setItem("contacts", JSON.stringify(contactsData.contacts))
    visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  } else {
    visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
    

    return <div className="container">
        <Phonebook addContact={addContact}/>
        <Contacts deleteContact={deleteContact} contacts={visibleContacts} handleChange={changeFilter} value={filter}/>
      </div>






}

export default App;
