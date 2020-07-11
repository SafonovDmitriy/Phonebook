import React, { useState } from 'react';
import s from './ContactsList.module.css';
import { Image, List, Button } from 'semantic-ui-react'
const ContactsList = React.memo((props) => {


    const [idToggle, setToggle] = useState(undefined)
    const [idEdit, setEdit] = useState(undefined)


    const editFunc = (contact) => {
        setEdit(contact._id)
        console.log(idEdit)
    }

    return <div className={s.Wrapper}>
        {props.allContact.map(contact => {

            return <div className={s.oneItem}>

                <div className={s.photo}>
                    <Image alt={contact.name + ' ' + contact.surename} src="https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg" />
                </div>
                {idEdit !== contact._id ? <div className={s.content}>
                    <div className={s.fullName}>
                        <h4>FullName: {contact.name && contact.name + " "}{contact.surename && contact.surename + " "}</h4>
                    </div>
                    <div className={s.info}>
                        <List>
                            <List.Item>
                                <List.Icon name='meh' />   Company: {contact.company}
                            </ List.Item>
                            <List.Item>
                                <List.Icon name='mail' />   Email: {contact.email}
                            </ List.Item>
                            <List.Item>
                                <List.Icon name='phone square' />   {contact.numbers.length > 1 ? "Numbers : " + contact.numbers.map(item => { return item }) : "Number:" + contact.numbers[0]}
                            </ List.Item>
                        </List>
                    </div>

                </div> :
                    <div>



                    </div>}
                <div>
                    <Button onClick={() => { editFunc(contact) }}>Edit</Button>
                </div>
                <div className={s.deleteButton} onClick={() => { setToggle(contact._id); }}>
                    {idToggle !== contact._id && < List.Item >
                        <List.Icon name='delete' />
                    </ List.Item>}
                </div>
                {idToggle === contact._id && <div className={s.deal}><h3>Do you really go to remove this contact?</h3>
                    <Button onClick={() => { props.deleteContact(contact._id); setToggle(undefined) }}>OK</Button>
                    <Button onClick={() => setToggle(undefined)}>Сancel</Button>

                </div>}
            </div>
        }
        )}
    </div >

})
export default ContactsList