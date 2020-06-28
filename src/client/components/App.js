import React from 'react';
import s from './App.module.css'
import HeaderContainer from './Header/Header.Container';
import { getContacts, createContact } from './../api/api';

function App() {
  // console.log(getContacts())
  let fullContacts = []
  getContacts().then(data => data.map(obj=>fullContacts.push(obj)))
  console.log(fullContacts)

  return (
    <div className={s.Wrapper}>
      <HeaderContainer />
    </div>
  );
}

export default App;
