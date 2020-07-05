import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setNewContactS } from './../../redux/Selectors/auth-selector';
import Header from './Header';


const HeaderContainer = (props) => {

    
    
    return <>
        <Header {...props}/>
        {/* <Search /> */}
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