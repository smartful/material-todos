import shortid from "shortid";
import { initialState } from "./initial-state";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
} from "./actions";

const saveStateToBrowser = (state) => {
  window.localStorage.setItem("material-todos", JSON.stringify(state));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const newState = {
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
      saveStateToBrowser(newState);
      return newState;
    }
    case TOGGLE_COMPLETED: {
      const newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

      saveStateToBrowser(newState);
      return newState;
    }
    case TOGGLE_IMPORTANT: {
      const newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, important: !todo.important }
            : todo
        ),
      };

      saveStateToBrowser(newState);
      return newState;
    }
    case DELETE_TODO: {
      const newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };

      saveStateToBrowser(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
