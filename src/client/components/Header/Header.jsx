import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import resizeImage from '../../common/optimizeImage/optimizeImage';
import { AddContactRF } from './AddNewContact/AddNewContact';
import s from './Header.module.css';
import SearchFormContainer from './Search/SearchForm.Container';


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

    const onMeinPhotoSelect = async (e) => {
        if (e.target.files.length) {
            let newImage
            newImage = await resizeImage(e.target.files[0])
            newData = { image: newImage }
        }
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
            <SearchFormContainer />

        </div>
    </Header>
})





export default Headerr