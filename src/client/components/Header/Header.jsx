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
            <ul>
                {arrLink.map(links => {
                    return <li><Link to={links.href}><span>{links.content}</span></Link></li>
                })}
            </ul>
        </div>
        <div className={s.NewContact}>
            <Button onClick={() => setToggle(toggle ? false : true)}>{toggle ? "Close" : "Add Contact"}</Button>
            {toggle && <AddContactRF onSubmit={onSubmit} />}
        </div>
        <div className={s.Search}>
            <SearchReduxForm onSubmit={onSubmitSearch} />

        </div>
    </Header>
})

const SearchForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit} className={s.form}>

            <Field className={s.searchInput} placeholder="" name={"search"} component="input" />
            <Button className={s.searchButton} circular icon='search' />

        </form >
    </>
}


const SearchReduxForm = reduxForm({
    form: 'search'
})(SearchForm)



export default Headerr