// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div className='contact-item'>
            <div className='contact-picture'>
                <img src={data.photo} alt={'Photo '+ data.name} />
            </div>
            <div className='contact-desc'>
                <div className='contact-name'>{data.name}</div>
                <div className='contact-phone'>{data.phone}</div>
                <div className='contact-email'>{data.email}</div>
            </div>
        </div>
    )
}

export default Contact;