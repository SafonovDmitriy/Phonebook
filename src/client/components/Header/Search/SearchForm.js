import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import s from './SearchForm.module.css';


const Search = (props) => {
    const onSubmitSearch = (formData) => {


        return formData.search ? props.setSearch(formData.search) : props.setSearch('')
    }
    return <SearchReduxForm onSubmit={onSubmitSearch} />
}


const SearchForm = (props) => {
    // console.log(formValues("search"))
    return <>
        <form onSubmit={props.handleSubmit} className={s.form} >
            <Field type="text" className={s.searchInput} placeholder="Search" name={"search"} component="input" />
            <Button type="submit" className={s.searchButton} circular icon='search' />
        </form >
    </>
}

const SearchReduxForm = reduxForm({
    form: 'search'
})(SearchForm)

export default Search