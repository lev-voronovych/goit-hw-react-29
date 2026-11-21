import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./component/ContactForm/ContactForm";
import { ContactList } from "./component/ContactList/ContactList";
import { Filter } from "./component/Filter/Filter";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filterSlice";


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleAddContact = (contact) => {
    const alreadyExists = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase() ||
        existingContact.number === contact.number,
    );

    if (alreadyExists) {
      window.alert("A contact with this name or number already exists.");
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <main className="app">
      <h1 className="app__title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <section className="app__contacts" >
        <h2 className="app__section-title" id="contacts-title">
          Contacts
        </h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contactInfo={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </section>
    </main>
  );
};

export default App;
