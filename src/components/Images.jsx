import React from 'react';

export const ShowFotos = ({ data }) => {
    if (!data) return;
    return (
        <div className='photos'>
            {data.map((el, index) => { return (<img key={index} className='photo' src={el} alt={`number${data.indexOf(el)}`} />) })}
        </div>
    )
}