'use client';
import { todoType } from '@/utils/apiCalls';
import React, { useEffect } from 'react';
import NoTodos from './NoTodos';
import useTodo from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todoList, getTodos } = useTodo();

  useEffect(() => {
    console.log('Getting todos');
    getTodos();
  }, []);

  return (
    <>
      {todoList.length > 0 ? (
        <div className='inline-block min-h-[15rem]'>
          {todoList.map((todo: todoType, index: number) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </div>
      ) : (
        <NoTodos />
      )}
    </>
  );
};

export default TodoList;
