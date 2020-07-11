import React from 'react';
import ContactsList from './ContactsList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllContact, deleteContactS } from './../../redux/Selectors/auth-selector';

const ContactsListContainer = (props) => {
    return <div>
        <ContactsList {...props} />
    </div>
}
let mapStateToProps = (state) => {
    return {
        allContact: getAllContact(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => deleteContactS(dispatch, id)
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ContactsListContainer);