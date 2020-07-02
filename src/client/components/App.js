import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getFullContactsListS } from '../redux/Selectors/auth-selector';
import s from './App.module.css';
import ContactsListContainer from './ContactsList/ContactsList.Container';
import HeaderContainer from './Header/Header.Container';


const App = (props) => {
  props.getFullContactsList()

  return (
    <div className={s.Wrapper}>
      <HeaderContainer />
      <Route path='/contacts' render={() => <ContactsListContainer />} />
    </div>
  );




}


let mapStateToProps = (state) => {

  return {


  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getFullContactsList: () => getFullContactsListS(dispatch)
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);