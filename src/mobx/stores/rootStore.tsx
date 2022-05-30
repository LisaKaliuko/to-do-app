import { createContext } from 'react';
import { UserStore } from './userStore/userStore';
import { ToDoStore } from './toDoStore/todoStore';

export const rootStoreContext = createContext({
  userStore: new UserStore(),
  toDoStore: new ToDoStore(),
});
