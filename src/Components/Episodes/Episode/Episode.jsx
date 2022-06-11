import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCharacter, deleteEpisode, incrementCharacter } from '../../../Redux/Reducer';

const Episode = () => {

  const episodes = useSelector(state => state.episodes)

  const dispatch = useDispatch()

  const delEpisode = (id) => {
    dispatch(deleteEpisode(id))
  }

  const handleDecrementCharacter = (id) => {
    dispatch(decrementCharacter(id))
  }

  const handleIncrementCharacter = (id) => {
    dispatch(incrementCharacter(id))
  }

  return (
    <>
      {episodes.map((item) => {
        return(
          <div className='episode' key={item.episode_id}>
            <div>
              <h3>Эпизод №{item.episode_id}</h3>
              <div>
                <button className='characterButtons' onClick={() => handleDecrementCharacter(item.episode_id)}>-</button>
                {item.characters.length}
                <button className='characterButtons' onClick={() => handleIncrementCharacter(item.episode_id)}>+</button>
                {item.characters.length >= 5 ? 'Персонажей' : item.characters.length === 1 ? 'Персонаж' : 'Персонажа'}
              </div>
            </div>
            <div>
              <button className='deleteButton' onClick={() => delEpisode(item.episode_id)}>Удалить</button>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Episode;