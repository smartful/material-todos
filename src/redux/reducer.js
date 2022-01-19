import shortid from "shortid";
import { initialState } from "./initial-state";
import { ADD_TODO, TOGGLE_COMPLETED } from "./actions";

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
    case TOGGLE_COMPLETED:
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
