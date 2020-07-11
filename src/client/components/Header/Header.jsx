import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Header } from 'semantic-ui-react';
import { AddContactRF } from './AddNewContact/AddNewContact';
import s from './Header.module.css';

const Headerr = React.memo((props) => {
    let [toggle, setToggle] = useState(false)
    let [arrLink] = useState([
        { content: 'Contacts', href: '/contacts' },

    ])


    const onSubmit = ({ name, surename, email, company, ...formData }) => {
        props.setNewContact({
            name: name,
            surename: surename,
            email: email,
            company: company,
            numbers: Object
                .entries(formData)
                .map(entry => (entry[1]))
        })
    }
    const onSubmitSearch = (formData) => {
        console.log(formData)
    }
    return <Header className={s.Wrapper}>
        <div className={s.link}>
            {arrLink.map(links => {
                return <div className={s.oneItem}>
                    <Button className={s.linkButton}><Link to={links.href}>{links.content}</Link></Button>
                </div>

            })}
        </div>
        <div className={s.NewContact}>
            <div className={s.newContactBox}>
                <Button className={s.newContactButton} onClick={() => setToggle(toggle ? false : true)}>{toggle ? "Close" : "Add Contact"}</Button>
                {toggle && <AddContactRF className={s.newContactForm} onSubmit={onSubmit} />}
                </div>
        </div>
        <div className={s.Search}>
            <SearchReduxForm onSubmit={onSubmitSearch} />

        </div>
    </Header>
})

const SearchForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={s.form}>

            <Field className={s.searchInput} placeholder="Search" name={"search"} component="input" />
            <Button className={s.searchButton} circular icon='search' />

        </form >
    </>
}


const SearchReduxForm = reduxForm({
    form: 'search'
})(SearchForm)



export default Headerr