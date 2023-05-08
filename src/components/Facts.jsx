import React from 'react';

export const ShowFacts = ({ data }) => {
    if (!data) return;
    return (
        <div>
            {data.map((el, index) => { return (<p key={index}>{data.indexOf(el) + 1}. {el}</p>) })}
        </div>
    )
}