'use client';
import {
  getAllTodos,
  addTodoApi,
  todoType,
  updateTodo,
  deleteTodoById,
  getActiveCount,
  getActiveTodos,
  getCompletedTodos,
  clearCompleted,
} from '@/utils/apiCalls';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import todoReducer, { actions, initialState, stateType } from './todoReducer';

type Props = {
  children: ReactNode;
};

const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  async function getTodos() {
    const todos = await getAllTodos();
    const reverseOrder = todos?.reverse();
    const activeCount = await getActiveCount();
    dispatch({
      type: actions.LOAD_TODOS,
      payload: {
        todos: reverseOrder,
        activeCount: activeCount.activeCount,
      },
    });
  }

  async function toggleCompleted(todo: todoType) {
    const updated: { todos: todoType[] } = await updateTodo(todo);
    const updatedActiveCount = await getActiveCount();
    const reversed = updated.todos.reverse();
    dispatch({
      type: actions.TOGGLE_COMPLETED,
      payload: {
        todos: reversed,
        activeCount: updatedActiveCount.activeCount,
      },
    });
  }

  async function deleteTodo(todoId: string) {
    const deleted = await deleteTodoById(todoId);
    const updatedCount = await getActiveCount();
    const updated = await getAllTodos();
    const updatedReversed = updated?.reverse();
    console.log('Todo Deleted', deleted);
    dispatch({
      type: actions.REMOVE_TODO_ITEM,
      payload: {
        todos: updatedReversed,
        activeCount: updatedCount.activeCount,
      },
    });
  }

  async function fetchActiveTodos() {
    const activeTodos = await getActiveTodos();
    const reverseActive = activeTodos?.reverse();
    console.log('Active TODOS****', activeTodos);
    dispatch({
      type: actions.TOGGLE_ACTIVE,
      payload: {
        todos: reverseActive,
      },
    });
  }

  async function fetchCompletedTodos() {
    const completedTodos = await getCompletedTodos();
    const reverseCompleted = completedTodos.reverse();
    dispatch({
      type: actions.GET_COMPLETED,
      payload: {
        todos: reverseCompleted,
      },
    });
  }

  async function addNewTodo(todo: any) {
    console.log(todo, '*****************');
    const newTodo = await addTodoApi(todo);
    const updated = getTodos();
    // const updatedCount = await getActiveCount();
    console.log('Todo Added', newTodo);
    dispatch({
      type: actions.ADD_TODO_ITEM,
      payload: {
        todos: updated,
        //activeCount: updatedCount.activeCount,
      },
    });
  }

  async function deleteCompleted() {
    const deleteAllCompleted = await clearCompleted();
    const updated = getTodos();
    console.log(deleteAllCompleted, '*********************');
    dispatch({
      type: actions.CLEAR_COMPLETED,
      payload: {
        todos: updated,
      },
    });
  }

  const value = {
    todoList: state.todoList,
    activeCount: state.activeCount,
    darkMode: state.darkMode,
    addNewTodo,
    toggleCompleted,
    getTodos,
    deleteTodo,
    fetchActiveTodos,
    fetchCompletedTodos,
    deleteCompleted,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => {
  const context: any = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within todoContext');
  }

  return context;
};

export default useTodo;
