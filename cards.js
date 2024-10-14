import React from 'react';

function Card({ name, image, description, label, link }) {
    return (
        <div className="ia">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} />
            </a>
            <p>{description}</p>
            <label>{label}</label>
        </div>
    );
}

export default Card;

