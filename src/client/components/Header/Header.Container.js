import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm/SearchForm';
import { getContacts } from './../../api/api';

const HeaderContainer = () => {
    console.log(getContacts())
    return <>
        <Header />
        <SearchForm />
    </>
}
export default HeaderContainer