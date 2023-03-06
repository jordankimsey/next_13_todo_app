import { todoType } from '@/utils/apiCalls';

export interface stateType {
  todoList: todoType[];
  activeCount: number;
  darkMode: boolean;
}

export const initialState: stateType = {
  todoList: [],
  darkMode: false,
  activeCount: 0,
};

export const actions = {
  ADD_TODO_ITEM: 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  GET_COMPLETED: 'GET_COMPLETED',
  TOGGLE_ACTIVE: 'TOGGLE_ACTIVE',
  LOAD_TODOS: 'LOAD_TODOS',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
};

const todoReducer = (state: stateType, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_TODO_ITEM:
      console.log('Add Todo');
      return {
        ...state,
        activeCount: payload.activeCount,
        todoList: payload.todos,
      };
    case actions.LOAD_TODOS:
      console.log('Load initial todos');
      return {
        ...state,
        activeCount: payload.activeCount,
        todoList: payload.todos,
      };
    case actions.REMOVE_TODO_ITEM:
      console.log('Remove todo');
      return {
        ...state,
        activeCount: payload.activeCount,
        todoList: payload.todos,
      };
    case actions.TOGGLE_COMPLETED:
      console.log('Toggle Completed');
      return {
        ...state,
        activeCount: payload.activeCount,
        todoList: payload.todos,
      };
    case actions.TOGGLE_ACTIVE:
      console.log('Toggle Active');
      return {
        ...state,
        todoList: payload.todos,
      };
    case actions.GET_COMPLETED:
      console.log('Fetchings all completed todos');
      return {
        ...state,
        todoList: payload.todos,
      };
      case actions.CLEAR_COMPLETED:
        console.log('Clearing all completed')
        return {
          ...state,
          todoList: payload.todos
        }
    default:
      return state;
  }
};

export default todoReducer;
