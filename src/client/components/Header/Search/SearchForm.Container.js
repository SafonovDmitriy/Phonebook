import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Search from './SearchForm';
import { setSearchS } from '../../../redux/Selectors/auth-selector';



const SearchFormContainer = (props) => {
    return <>
        <Search {...props} />
    </>
}


let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setSearch: (textSearch) => setSearchS(dispatch, textSearch)
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchFormContainer);