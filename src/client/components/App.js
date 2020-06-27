import React from 'react';
import s from './App.module.css'
import HeaderContainer from './Header/Header.Container';

function App() {
  return (
    <div className={s.Wrapper}>
      <HeaderContainer />
    </div>
  );
}

export default App;
