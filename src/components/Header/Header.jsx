import React from 'react';
import './Header.css'


const Header = (props) => {
    return(
        <div className='profile_content'>
            <div className='profile_pic'></div>
            <h3>{props.name} {props.sobrenome}</h3>
            <p>Seja Bem-Vindo(a)!</p>
        </div>
    )
}

export default Header