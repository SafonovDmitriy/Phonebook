import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Header } from 'semantic-ui-react';
import { AddContactRF } from './AddNewContact/AddNewContact';
import s from './Header.module.css';
var Jimp = require('jimp');
const Headerr = React.memo((props) => {
    let [toggle, setToggle] = useState(false)
    let [arrLink] = useState([
        { content: 'Contacts', href: '/contacts' },
    ])

    let newData = {}
    const onSubmit = ({ name, surename, email, company, image, ...formData }) => {
        newData = {
            name: name,
            surename: surename,
            email: email,
            company: company,
            numbers: Object
                .entries(formData)
                .map(entry => (entry[1])),
            ...newData
        }


        props.setNewContact(newData)
        newData = {}
    }
    const resizeImage = async (file) => {
        let newImage
        let image64 = await toBase64(file)

        let image = await Jimp.read(image64)
        image = await image.resize(150, 150)
        await image.getBase64(Jimp.AUTO, (err, res) => {
            newImage = res
        });
        return newImage
    }
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        return reader.result
    });

    const onMeinPhotoSelect = async (e) => {
        if (e.target.files.length) {
            let newImage
            newImage = await resizeImage(e.target.files[0])
            newData = { image: newImage }
        }











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
                {toggle && <AddContactRF className={s.newContactForm} onSubmit={onSubmit} onMeinPhotoSelect={onMeinPhotoSelect} />}
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