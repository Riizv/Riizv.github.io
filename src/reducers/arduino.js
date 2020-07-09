const initialState = {
  memory: [],
};

const Arduino = (state = initialState, action) => {
  switch (action) {
    case "GET_API":
      return "null";
      break;

    default:
      return state;
      break;
  }
};

export default Arduino;
