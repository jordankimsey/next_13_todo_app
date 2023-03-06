"use client"
import React from 'react';
import useTodo from './TodoContext';

const ClearCompleted = () => {
    const {deleteCompleted } = useTodo();
  return (
    <div>
      <button onClick={deleteCompleted} className='hover:text-black dark:hover:text-gray-200'>
        Clear Completed
      </button>
    </div>
  );
};

export default ClearCompleted;
