import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { onlyNumber, requiredFuild, textOnly } from '../../../utils/validators/validators';
import { deleteContactS, getAllContact, updateContactS } from './../../redux/Selectors/auth-selector';
import ContactsList from './ContactsList';
import resizeImage from '../../common/optimizeImage/optimizeImage';

const ContactsListContainer = (props) => {


    const [idToggle, setToggle] = useState(undefined)
    const [idEdit, setEdit] = useState(undefined)
    const [editContact, setEditContact] = useState(undefined)
    const [arrInput] = useState(
        [
            { name: "name", validate: [textOnly, requiredFuild], label: "First name" },
            { name: "surename", validate: [textOnly], label: "Surename" },
            { name: "email", validate: [], label: "Email" },
            { name: "company", validate: [textOnly], label: "Company" },
        ])
    const [arrNumbers, setArrNumbers] = useState(
        [
            // { name: "number", placeholder: "Number", validate: [onlyNumber] },
        ])
    let objUpdateContact = { numbers: [] }
    const onSubmit = (formDate) => {
        console.log(objUpdateContact)

        for (let key in formDate) {
            if (key !== "_id") {
                if (!key.indexOf("Number")) {
                    if (formDate[key] !== "") {
                        objUpdateContact.numbers.push(formDate[key])
                    }
                }
                else {
                    objUpdateContact = { [key]: formDate[key], ...objUpdateContact }
                }

            }

        }
        console.log(objUpdateContact)

        props.updateContact(idEdit, objUpdateContact)
    }

    const onMeinPhotoSelect = async (e) => {
        if (e.target.files.length) {

            let newImage
            newImage = await resizeImage(e.target.files[0])
            objUpdateContact = ({ image: newImage, ...objUpdateContact })
        }
    }

    let counter = 0
    function upCounter(value = 0) {
        return counter += value
    }



    const setInitialValue = (initialize) => {
        let oldContact = {}
        function upContact(key, item) {
            return oldContact = { [key]: item, ...oldContact }
        }

        for (let key in editContact) {
            if (key === "numbers") {
                editContact[key].map(item => {
                    upCounter(1)
                    return upContact([`Number${upCounter()}`], item)
                })
            } else {
                upContact([key], editContact[key])
            }
            counter = 0

        }

        return initialize(oldContact)

    }


    const initArr = (contact) => {
        setEditContact(contact)
        setEdit(contact._id);
        setToggle(undefined)

        for (let key in contact) {
            arrInput.map(item => {
                if (key === item.name) {
                    item.placeholder = contact[key]
                }
                return undefined
            })
        }


        let newArr = []
        contact.numbers.map(item => {
            upCounter(1);
            newArr.push({ name: `Number${counter}`, placeholder: item, validate: [onlyNumber] })
            return undefined
        })
        setArrNumbers(newArr)

    }
    const addNumber = () => {
        let count = arrNumbers.length + 1
        let timeArr = []
        arrNumbers.map(item => {
            timeArr.push(item)
            return undefined
        })
        timeArr.push({ name: `Number${count}`, placeholder: "nubmer", validate: [onlyNumber] })
        setArrNumbers(timeArr)
    }
    return <div>
        <ContactsList {...props}
            idToggle={idToggle}
            setToggle={setToggle}
            idEdit={idEdit}
            setEdit={setEdit}
            editContact={editContact}
            setEditContact={setEditContact}
            arrInput={arrInput}
            arrNumbers={arrNumbers}
            setArrNumbers={setArrNumbers}
            onSubmit={onSubmit}
            initArr={initArr}
            addNumber={addNumber}
            setInitialValue={setInitialValue}
            onMeinPhotoSelect={onMeinPhotoSelect}

        />
    </div>
}
let mapStateToProps = (state) => {
    return {
        allContact: getAllContact(state),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => deleteContactS(dispatch, id),
        updateContact: (id, newData) => updateContactS(dispatch, id, newData)
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ContactsListContainer);