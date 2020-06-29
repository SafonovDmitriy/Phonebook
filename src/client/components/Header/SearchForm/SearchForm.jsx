import React from 'react';
import s from './SearchForm.module.css'
import { reduxForm, Field } from 'redux-form';

const Search = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className={s.Wrapper}>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
        {/* <input placeholder="Please,enter Search Number" /><button >Click</button> */}
    </div >
}



const SearchForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.form}>
        <Field placeholder="Please,enter Search Number" name={"search"} component="input" />
        <button >Click</button>
    </form >
}



const LoginReduxForm = reduxForm({
    form: 'search'
})(SearchForm)
export default Search