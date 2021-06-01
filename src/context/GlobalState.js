import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const initalState = {
  users: [],
};

//create context

export const GlobalContext = createContext(initalState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  //remove user
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  //add user
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  //edit user
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
