'use client'
import React from 'react';
import useTodo from './TodoContext';

const ToggleButtons = () => {
      const { fetchActiveTodos, fetchCompletedTodos, getTodos } = useTodo();
  return (
    <>
      <button
        onClick={getTodos}
        className='hover:text-black dark:hover:text-gray-200'
      >
        All
      </button>
      <button
        onClick={fetchActiveTodos}
        className='px-2  hover:text-black dark:hover:text-gray-200'
      >
        Active
      </button>
      <button
        onClick={fetchCompletedTodos}
        className=' hover:text-black dark:hover:text-gray-200'
      >
        Completed
      </button>
   
    </>
  );
};

export default ToggleButtons;
