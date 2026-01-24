import styles from "./Contacts.module.css"
import { useMycontext } from "../contexts/Context";
import { useRef, useEffect } from "react";

export const Contacts = () => {
    const {deleteContact, visibleContacts, changeFilter, filter} = useMycontext()
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.div}>
                <p className={styles.text}>Фильтер по імені</p>
                <input ref={inputRef} value={filter} onChange={(e) => {changeFilter(e.target.value)}} className={styles.input} name="nameInput"></input>
            </div>
            <ul className={styles.list}>
                {visibleContacts.map((contact) => {
                    return <li className={styles.item} key={contact.id}>
                        <p className={styles.text}>{contact.name}</p>
                        <p className={styles.text}>{contact.number}</p>
                        <button onClick={() => {deleteContact(contact.id)}} type='button'>Delete</button>
                    </li>;
                })}
            </ul>
        </div>
)
}