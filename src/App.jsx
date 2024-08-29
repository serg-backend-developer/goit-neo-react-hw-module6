import ContactList from './components/ContactList/ContactList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;