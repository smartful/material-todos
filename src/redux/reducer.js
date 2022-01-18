import shortid from "shortid";
import { initialState } from "./initial-state";
import { ADD_TODO } from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title,
            completed: false,
            important: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
