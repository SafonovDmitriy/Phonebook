import React, { useState } from 'react';
import s from './SearchForm.module.css'
import { reduxForm, Field } from 'redux-form';

const Search = (props) => {
    let [toggle, setToggle] = useState(false)
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <>
        {<div className={toggle ? s.openWrapper : s.closeWrapper}>
            {toggle ? <div onClick={() => setToggle(false)}><LoginReduxForm onSubmit={onSubmit} {...props} /> </div> : <div onClick={() => setToggle(true)} > <span>Search ↓</span></div>}
        </div >
        }
        {/* {!toggle && } */}
    </>
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