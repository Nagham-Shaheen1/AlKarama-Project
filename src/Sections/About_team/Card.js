// Card.js
import React from 'react';
import { Spoiler } from '@mantine/core';
import './Card.css'; // Ensure you have a CSS file for styling the card

function Card({ title, description,showSpoiler  }) {
    return (
        <div className='card' >
            {/* <img src={image} alt={title} className='card-image' /> */}
            <h2 className='card-title'>{title}</h2>
       
                <Spoiler Height={60} showLabel="عرض المزيد" hideLabel="أقل" style={{ width: '100%' }}>
                    <p className='card-description'>{description}</p>
                </Spoiler>
            
            
        </div>
    );
}

export default Card;