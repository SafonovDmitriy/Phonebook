import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddContactRF } from './AddNewContact/AddNewContact';
import s from './Header.module.css';



const Header = React.memo((props) => {
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

    return <div className={s.Wrapper}>
        <div className={s.link}>
            <ul>
                {arrLink.map(links => {
                    return <li><Link to={links.href}><span>{links.content}</span></Link></li>
                })}
            </ul>
        </div>
        <div className={s.NewContact}>
            <button onClick={() => setToggle(toggle ? false : true)}>{toggle ? "Close" : "Add Contact"}</button>
            {toggle && <AddContactRF onSubmit={onSubmit} />}
        </div>
    </div>
})





export default Header