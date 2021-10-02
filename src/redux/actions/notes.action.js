export const add_new_note = (data) => async (dispatch) => {
  // async stuff DB/API
  dispatch({
    type: 'ADD_NOTE',
    payload: data,
  });
};

// Toogling notes between important and  all notes
export const toggleNote = (id) => async (dispatch) => {
  dispatch({
    type: 'TOGGLE_NOTE',
    payload: id,
  });
};
