import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './AddNewContact.module.css';
import { requiredFuild, textOnly, onlyNumber } from './../../../../utils/validators/validators';
import { CastomInput } from './../../FormsControls/Form';



const NewContact = (props) => {

    let [countNubmer, setcountNumber] = useState(2)
    let [arrInput, setArrInput] = useState(
        [
            { name: "name", placeholder: "Name", validate: [textOnly] },
            { name: "surename", placeholder: "Surename", validate: [textOnly] },
            { name: "email", placeholder: "Email", validate: [] },
            { name: "company", placeholder: "Company", validate: [textOnly] },
            { name: "number", placeholder: "Number", validate: [onlyNumber] },
        ])


    return <form onSubmit={props.handleSubmit} className={s.form}>
        <h2>Add Contact Form</h2>
        {arrInput.map(item => {

            return (<>
                <Field validate={item.validate} placeholder={item.placeholder} name={item.name} component={CastomInput} />
                <span className={s.errorField}></span>
                </>
            )
        })}
        <span onClick={() => {

            let newArr = []
            arrInput.map(item => { newArr.push(item); return undefined })
            newArr.push({ name: "number" + String(countNubmer), placeholder: "Number " + String(countNubmer), validate: [onlyNumber] })
            setArrInput(newArr)
            setcountNumber(countNubmer + 1)
            return console.log("Successfully added a new number")
        }
        }>+another number</span>


        <button >Click</button>
    </form >
}

export const AddContactRF = reduxForm({
    form: 'newContact'
})(NewContact)

