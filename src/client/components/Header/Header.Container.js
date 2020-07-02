import React from 'react';
import Header from './Header';
import Search from './SearchForm/SearchForm';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setNewContactS } from './../../redux/Selectors/auth-selector';


const HeaderContainer = (props) => {

    
    
    return <>
        <Header {...props}/>
        <Search />
    </>
}


let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setNewContact:(user)=>setNewContactS(dispatch,user)
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);