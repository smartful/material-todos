import shortid from "shortid";
import { initialState } from "./initial-state";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
} from "./actions";

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
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, important: !todo.important }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
