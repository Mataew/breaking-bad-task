import React from 'react';
import { useDispatch } from 'react-redux';
import { boom } from '../../Redux/Reducer';

const WildHeisenberg = () => {

  const dispatch = useDispatch()

  const deleteAll = () => {
    dispatch(boom())
  }

  return (
    <div className='deleteAll_wrapper'>
      <img id='heisenberg'
           src='https://ic.pics.livejournal.com/alexiermakov/77584261/32334/32334_900.jpg'
           alt="heisenberg"/>
      <button onClick={deleteAll} id='deleteAll'>ЭТО НЕ МЕТ!</button>
    </div>
  );
};

export default WildHeisenberg;