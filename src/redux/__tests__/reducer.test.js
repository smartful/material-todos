jest.mock("../initial-state", () => {
  return {
    initialState: {
      todos: [],
    },
  };
});

import reducer from "../reducer";
import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

describe("Reducer", () => {
  beforeEach(() => {
    global.window = {
      localStorage: {
        setItem: jest.fn(),
      },
    };
  });

  afterEach(() => {
    global.window = null;
  });

  test("Should add a new todo item", () => {
    const initialState = {
      todos: [],
    };

    const action = {
      type: ADD_TODO,
      payload: {
        title: "Read a book",
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.todos[0].title).toEqual("Read a book");
  });

  test("Should mark todo as completed", () => {
    const initialState = {
      todos: [
        {
          id: "abcdef",
          title: "buy orange juice",
          completed: false,
          important: false,
        },
      ],
    };

    const action = {
      type: TOGGLE_COMPLETED,
      payload: "abcdef",
    };

    const newState = reducer(initialState, action);
    expect(newState.todos[0].completed).toBeTruthy();
  });
});
