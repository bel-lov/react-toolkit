import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ShowFotos } from './Images';
import { SHOWPHOTOS, DELETELAST, DEIETEALL } from '../redux/images';

export const Form2 = () => {
    const photos = useSelector(state => state.showphotos.photos);

    const dispatch = useDispatch();
    function getFile(evt) {
        const element = evt.target;
        const phot = URL.createObjectURL(element.files[0]);
        dispatch(SHOWPHOTOS(phot));
        element.value = '';
    }

    function lastFoto() { dispatch(DELETELAST()); }

    function allFoto() { dispatch(DEIETEALL()); }

    return (
        <div className='task2'>
            <h3 className='title'>Фото профиля пользователя</h3>
            <input id='pho' type='file' accept='image/*' onChange={getFile} />
            <input type='button' value='Удалить последее фото' onClick={lastFoto} />
            <input type='button' value='Удалить все фото' onClick={allFoto} />
            <ShowFotos data={photos} />
        </div>
    )
}
