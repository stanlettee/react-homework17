import { createContext, useContext, useState, useEffect } from "react";
import contactsData from "../contacts.json";

const Context = createContext();

export const useMycontext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
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

    let visibleContacts = [];

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

    if (contacts === null) {
        localStorage.setItem("contacts", JSON.stringify(contactsData.contacts))
        visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      } else {
        visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      }

    return (
        <Context.Provider value={{ filter, deleteContact, addContact, visibleContacts, changeFilter }}>
            {children}
        </Context.Provider>
    );
};