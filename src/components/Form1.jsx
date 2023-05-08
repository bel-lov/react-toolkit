import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOWFACTS } from '../redux/facts';
import { ShowFacts } from './Facts';

export const Form1 = () => {
    const facts = useSelector(state => state.showfacts.facts);
    const dispatch = useDispatch();
    function getNumber() {
        const quantity = Number(document.getElementById('number').value) - 1;
        dispatch(SHOWFACTS(quantity));
    }
    function reset() {
        document.getElementById('number').value = '';
        dispatch(SHOWFACTS(-1));
    }
    return (
        <div className='task1'>
            <h3 className='title'>Факты о Star Wars</h3>
            <label className='label'> Выберите количетво фактов:
                <input type='number' max='5' min='0' step='1' id='number' onChange={getNumber} />
                <input type='reset' value='Очистить' onClick={reset} />
            </label>
            <ShowFacts data={facts} />
        </div>
    )
}