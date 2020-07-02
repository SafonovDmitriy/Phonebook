import React from 'react';
import s from './ContactsList.module.css';

const ContactsList = (props) => {
    console.log(props)
    return <div className={s.Wrapper}>

        {props.allContact.map(contact => {
            return <div className={s.oneItem}>
                <div className={s.photo}>
                    <img alt={contact.name + ' ' + contact.surename} src="https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg" />
                </div>
                <div className={s.content}>
                    <div className={s.fullName}>
                        <h4>FullName: {contact.name && contact.name + " "}{contact.surename && contact.surename + " "}</h4>
                    </div>
                    <div className={s.info}>
                        <p>Company: {contact.company ? contact.company : <button onClick={() => { console.log(contact._id) }}>Add Company</button>}</p>
                        <p>Email: {contact.email ? contact.email : <button onClick={() => { console.log(contact._id) }}>Add Email</button>}</p>
                        <p>{contact.number2 ? "Numbers : " + contact.number : "Number:" + contact.number}</p>
                    </div>

                </div>
            </div>
        }
        )}
    </div>

}
export default ContactsList