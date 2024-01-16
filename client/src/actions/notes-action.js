import axios from 'axios';

export const addNote = (note) => {
    return  async (dispatch) => {
       try {
        const response = await axios.post('http://localhost:5000/api/notes', note);
        dispatch({
        type: 'ADD_NOTE',
        payload: response.note,
        });
       } catch (error) {
        console.error('Error adding note:', error);
       }
    };
};
export const getNotes = () => {
    return async (dispatch) => {
      try { 
        const response = await axios.get('http://localhost:5000/api/notes');
        dispatch({
          type: 'GET_NOTES',
          payload: response.data,
        });
      } catch (error) {
        console.error('Error getting notes:', error);
      }
    };
};
