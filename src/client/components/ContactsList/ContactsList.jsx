import React from 'react';
import s from './ContactsList.module.css';
import { Image, List } from 'semantic-ui-react'
const ContactsList = (props) => {

    console.log(props)
    return <div className={s.Wrapper}>
        {props.allContact.map(contact => {
            // console.log(contact)
            return <div className={s.oneItem}>
                <div className={s.photo}>
                    <Image alt={contact.name + ' ' + contact.surename} src="https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg" />
                </div>
                <div className={s.content}>
                    <div className={s.fullName}>
                        <h4>FullName: {contact.name && contact.name + " "}{contact.surename && contact.surename + " "}</h4>
                    </div>
                    <div className={s.info}>
                        <List>
                            <List.Item>
                            <List.Icon name='marker' />   Company: {contact.company ? contact.company : <button onClick={() => { console.log(contact._id) }}>Add Company</button>}
                            </ List.Item>
                            <List.Item>
                            <List.Icon name='mail' />   Email: {contact.email ? contact.email : <button onClick={() => { console.log(contact._id) }}>Add Email</button>}
                            </ List.Item>
                            <List.Item>
                            <List.Icon name='phone' />   {contact.numbers.length > 1 ? "Numbers : " + contact.numbers.map(item => { return item }) : "Number:" + contact.numbers[0]}
                            </ List.Item>
                        </List>
                    </div>

                </div>
            </div>
        }
        )}
    </div>

}
export default ContactsList