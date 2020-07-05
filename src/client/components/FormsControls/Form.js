import React from 'react';
import s from "./Form.module.css"
import { Message } from 'semantic-ui-react'

export const CastomInput = ({ input, meta, ...props }) => {
    return (
        <div>
            <input className={meta.touched && meta.error ? s.errorField : ''}{...input} {...props}></input>
            {meta.touched && meta.error ?

                <Message negative>
                    <Message.Header>We wish we could use this field.</Message.Header>
                    <p>{meta.error}</p>
                </Message>

                : ''}
        </div>
    )


}


