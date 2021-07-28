import React, { useReducer } from "react";
import { ICounterAction, ICounterState} from "../interface";

const defaultState: ICounterState = {
  todos: []
};

const reducer = (
  state,
  action: ICounterAction
): ICounterState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "DELET":
      return {
        ...state,
        todos: []
      };

    default:
      return state;
  }
};

export const Context = React.createContext({} as IContextModel);

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
