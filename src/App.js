import './App.css';
import { Contacts } from "./components/Contacts"
import { Phonebook } from "./components/Phonebook"


function App() { 
    return <div className="container">
          <Phonebook/>
          <Contacts/>
      </div>
}

export default App;
