import React, { useState } from 'react';
import s from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = React.memo((props) => {
    let [arrLink] = useState([
        { content: 'Contacts', href: '/contacts' },
    ])
    return <div className={s.Wrapper}>
        {arrLink.map(links => {
            return <Link to={links.href}>{links.content}</Link>
        })}

    </div>
})
export default Header