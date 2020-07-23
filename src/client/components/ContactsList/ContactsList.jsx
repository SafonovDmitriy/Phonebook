import React from 'react';
import s from './ContactsList.module.css';
import { Image, List, Button, Form } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form';
import { CastomInput } from './../FormsControls/Form';
let defaultAvatar = "https://images.ua.prom.st/1065621053_w128_h128_vafelnaya-kartinka-lyubov.jpg"

const ContactsList = React.memo(({ searchValue, idToggle, setToggle, idEdit, setEdit, editContact, setEditContact, arrInput, arrNumbers, setArrNumbers, onSubmit, initArr, addNumber, ...props }) => {


    return <div className={s.Wrapper}>
        {props.allContact.map(contact => {

            return <div className={s.oneItem}>

                <div className={s.photo}>
                    <Image alt={contact.name + ' ' + contact.surename} src={!contact.image ? defaultAvatar : contact.image} />
                </div>
                {idEdit !== contact._id ? <div className={s.content}>
                    <div className={s.fullName}>
                        <h4>FullName: {contact.name && contact.name + " "}{contact.surename && contact.surename + " "}</h4>
                    </div>
                    <div className={s.info}>
                        <List>
                            {contact.company && <List.Item>
                                <List.Icon name='meh' />   Company: {contact.company}
                            </ List.Item>}
                            {contact.email && <List.Item>
                                <List.Icon name='mail' />   Email: {contact.email}
                            </ List.Item>}
                            {contact.numbers.length !== 0 && <List.Item>
                                <List.Icon name='phone square' />   {contact.numbers.length > 1 ? "Numbers : " + contact.numbers.map(item => { return item }) : "Number : " + contact.numbers[0]}
                            </ List.Item>}
                        </List>
                    </div>

                </div> :
                    <div>

                        <EditReduxForm
                            onSubmit={onSubmit}
                            contact={contact}
                            setEdit={setEdit}
                            setEditContact={setEditContact}
                            editContact={editContact}
                            setArrNumbers={setArrNumbers}
                            arrInput={arrInput}
                            arrNumbers={arrNumbers}
                            addNumber={addNumber}
                            {...props} />

                    </div>}
                <div>
                    {idEdit !== contact._id && < Button type="button" onClick={() => initArr(contact)}>Edit</Button>}
                </div>

                <div className={s.deleteButton} onClick={() => { setEdit(undefined); setToggle(contact._id); }}>
                    {idToggle !== contact._id && < List.Item >
                        <List.Icon name='delete' />
                    </ List.Item>}
                </div>
                {
                    idToggle === contact._id && <div className={s.deal}><h3>Do you really go to remove this contact?</h3>
                        <Button type="submit" onClick={() => { props.deleteContact(contact._id); setToggle(undefined) }}>OK</Button>
                        <Button type="button" onClick={() => setToggle(undefined)}>Сancel</Button>

                    </div>
                }
            </div>
        }
        )}
    </div >

})

const editForm = ({ contact, setEditContact, setArrNumbers, arrInput, arrNumbers, editContact, addNumber, setInitialValue, ...props }) => {


    return <form onSubmit={props.handleSubmit} _id={contact._id} className={s.form}  >
        <Form>
            {arrInput.map(item => {
                return <Form.Field>
                    <label>{item.label}</label>
                    <Field name={item.name} validate={item.validate} component={CastomInput} />
                </Form.Field>
            })}
            <input type='file' onChange={props.onMeinPhotoSelect} accept=".jpg, .jpeg, .png" />
            {arrNumbers.map(item => {

                return <Form.Field>
                    <label>{item.name}</label>
                    <Field name={item.name} validate={item.validate} component={CastomInput} />
                </Form.Field>
            })}
            <div className={s.buttoms}>
                <Button type="button" onClick={() => setInitialValue(props.initialize)}>Saved data</Button>
                <Button type="button" onClick={() => addNumber()
                }>Add Number</Button>
                <Button type="submit">Save</Button>
                <Button type="button" onClick={() => { props.setEdit(undefined) }}>Сancel</Button>
            </div>
        </Form>
    </form >
}


const EditReduxForm = reduxForm({
    form: 'edit',
    // enableReinitialize: true,


})(editForm)
export default ContactsList