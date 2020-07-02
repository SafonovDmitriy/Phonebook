import React from 'react';
import s from "./Form.module.css"

export const CastomInput = ({ input, meta, ...props }) => {
    return (
        <>
            <input className={meta.touched && meta.error ? s.errorField : ''}{...input} {...props}></input>
            {meta.touched && meta.error ? <span className={s.errorField}>{meta.error}</span>:''}
        </>
    )


}


