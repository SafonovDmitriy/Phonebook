import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getFullContactsListS } from '../redux/Selectors/auth-selector';
import s from './App.module.css';
import ContactsListContainer from './ContactsList/ContactsList.Container';
import HeaderContainer from './Header/Header.Container';
import { Container } from 'semantic-ui-react'

const App = (props) => {
  props.getFullContactsList()

  return (
    <Container>
      <div className={s.Wrapper}>
        <HeaderContainer />
        <Route path='/contacts' render={() => <ContactsListContainer />} />
      </div>
    </Container>
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