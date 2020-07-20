import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './AddNewContact.module.css';
import { requiredFuild, textOnly, onlyNumber } from './../../../../utils/validators/validators';
import { CastomInput } from './../../FormsControls/Form';
import { Form, Input, Button } from 'semantic-ui-react'

const NewContact = (props) => {

    let [arrInput] = useState(
        [
            { name: "name", placeholder: "Name", validate: [textOnly, requiredFuild] },
            { name: "surename", placeholder: "Surename", validate: [textOnly] },
            { name: "email", placeholder: "Email", validate: [] },
            { name: "company", placeholder: "Company", validate: [textOnly] },


        ])
    let [arrNumbers, setArrNumbers] = useState(
        [
            { name: "number", placeholder: "Number", validate: [onlyNumber, requiredFuild] },
        ]
    )



    function updateForm() {
        let arr = []
        arrInput.map(item => { return arr.push(item) })
        arrNumbers.map(item => { return arr.push(item) })
        return arr
    }

    function newForm() {
        return updateForm().map(item => {
            return <Form.Field
                id='form-input-control-first-name'
                control={Input}
            ><Field validate={item.validate} placeholder={item.placeholder} name={item.name} component={CastomInput} /></Form.Field >


        })

    }



    return <div className={s.newForm}>

        <Form>

            <form onSubmit={props.handleSubmit} className={s.form}>
                <h2>Add Contact Form</h2>
                {/* // { name: "image", placeholder: "URLforAvatar", validate: [] }, */}
                <Form>
                    {newForm()}

                    <input type='file' onChange={props.onMeinPhotoSelect} />


                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Confirm'

                    />

                </Form>
                <span onClick={() => {
                    let newNubmersArr = []
                    arrNumbers.map(item => { return newNubmersArr.push(item) })
                    newNubmersArr.push({ name: "number" + String(arrNumbers.length + 1), placeholder: "Number " + String(arrNumbers.length + 1), validate: [onlyNumber] })
                    setArrNumbers(newNubmersArr)
                }
                }>+another number</span>

            </form >

        </Form>
    </div>
}

export const AddContactRF = reduxForm({
    form: 'newContact'
})(NewContact)

