import { useState } from "react";
import './App.css';
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";



function App() {

 const [selectedContactId, setSelectedContactId] = useState(null);


  return (
    <>
    {selectedContactId ? (
      <SelectedContact
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />
    ) : (
      <ContactList 
        setSelectedContactId={setSelectedContactId}
        selectedContactId={selectedContactId}  
      />     
    )
    }
    
    </>
  );
}

export default App
