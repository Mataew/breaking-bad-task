const initialState = {
  episodes: []
}

export default function episodesReducer (state = initialState, action){
  switch (action.type){
    case 'episodes/load/fulfilled':
      return {
        episodes: action.payload
      }
    case 'episode/delete/fulfilled':
      return {
        episodes: [...state.episodes.filter(item => item.episode_id !== action.payload)]
      }
    case 'episodes/decreaseSort/fulfilled':
      return {
        episodes: [...state.episodes.sort((a,b) => b.characters.length - a.characters.length)]
      }
    case 'episodes/increasingSort/fulfilled':
      return {
        episodes: [...state.episodes.sort((a,b) => a.characters.length - b.characters.length)]
      }
    case 'character/decrement/fulfilled':
      return {
        episodes: state.episodes.map(item => {
          if (item.episode_id === action.payload){
            item.characters.pop()
          }
          return item
        })
      }
    case 'character/increment/fulfilled':
      return {
        episodes: state.episodes.map(item => {
          if (item.episode_id === action.payload){
            item.characters.length++
          }
          return item
        })
      }
    case 'boom':
      return {
        episodes: []
      }
    default:
      return state
  }
}

export const episodesLoad = () => {
  return async (dispatch) => {
    try{
      const response = await fetch('https://breakingbadapi.com/api/episodes')
      const episodes = await response.json()
      dispatch({type: 'episodes/load/fulfilled', payload: episodes})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const deleteEpisode = (id) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'episode/delete/fulfilled', payload: id})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const decreasingSort = () => {
  return async (dispatch) => {
    try {
      dispatch({type: 'episodes/decreaseSort/fulfilled'})
    } catch (e) {
      console.log(e.message)
    }
  }
}
export const increasingSort = () => {
  return async (dispatch) => {
    try {
      dispatch({type: 'episodes/increasingSort/fulfilled'})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const decrementCharacter = (id) => {
  return async (dispatch) => {
   try {
     console.log(id)
     dispatch({type: 'character/decrement/fulfilled', payload: id})
   } catch (e) {
     console.log(e.message)
   }
  }
}
export const incrementCharacter = (id) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'character/increment/fulfilled', payload: id})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const boom = () => {
  return async (dispatch) => {
    try {
      dispatch({type: 'boom'})
    } catch (e) {
      console.log(e.message)
    }
  }
}


