import React from "react";

export type ICounterAction =
  | { type: "AD"; payload: ITodoItem };

export interface ITodoItem {
  id: string;
  title: string;
  active: boolean;
}

export interface ICounterState {
  todos: ITodoItem[];
}

export interface IContextModel {
  state: ICounterState;
  dispatch: React.Dispatch<ICounterAction>;
}
