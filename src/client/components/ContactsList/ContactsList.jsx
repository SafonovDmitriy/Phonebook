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
                        <h4>FullName: {contact.name + ' ' + contact.surename}</h4>
                    </div>
                </div>
            </div>
        }
        )}
    </div>

}
export default ContactsList