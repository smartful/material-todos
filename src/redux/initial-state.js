export const initialState = JSON.parse(
  window.localStorage.getItem("material-todos")
) || {
  todos: [
    {
      id: 0,
      title: "Buy Milk",
      completed: false,
      important: false,
    },
    {
      id: 1,
      title: "Clean my room",
      completed: true,
      important: false,
    },
    {
      id: 2,
      title: "Read the book",
      completed: false,
      important: true,
    },
    {
      id: 3,
      title: "Do sport",
      completed: true,
      important: true,
    },
    {
      id: 4,
      title: "Prepare meeting",
      completed: false,
      important: true,
    },
  ],
};
