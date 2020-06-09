import React from 'react';

export default function Footer({ children, title, subtitle }) {
    return (
        <div className='footer'>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}