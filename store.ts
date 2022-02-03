import { createStore } from "redux";
const initialState = {
  user: { email: "", phone: "", name: "", id: "", password: "", phrase: "" },
};

const appReducer=(initialState, action)=> {
  switch (action.type) {
    case "ADD_USER_EMAIL": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          email: action.payload,
        },
      };
    }
    case "ADD_USER_PHONE": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          phone: action.payload,
        },
      };
    }
    case "ADD_USER_NAME": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          name: action.payload,
        },
      };
    }
    case "ADD_USER_ID": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          id: action.payload,
        },
      };
    }
    case "ADD_USER_PASSWORD": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          password: action.payload,
        },
      };
    }
    case "ADD_USER_PHRASE": {
      return {
        ...initialState,
        user: {
          ...initialState.user,
          phrase: action.payload,
        },
      };
    }
    default:
      return initialState;
  }
}

const store = createStore(appReducer, initialState);

export default store;
