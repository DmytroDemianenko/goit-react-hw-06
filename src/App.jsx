// import { useEffect, useState } from "react";
import "modern-normalize";
// import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

// const LOCAL_STORAGE_KEY = "contactStorage";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className="pageTitle">Phonebook</h1>
        <ContactForm />
        {/* <SearchBox value={filter} onChange={} /> */}
        <ContactList />
      </div>
    </>
  );
}

export default App;
