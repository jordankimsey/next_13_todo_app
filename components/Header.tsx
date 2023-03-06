'use client';
import React, {SyntheticEvent, useState} from 'react';
import useTodo from './TodoContext';
import ToggleDarkMode from './ToggleDarkMode';

const Header = () => {
 const { addNewTodo } = useTodo();
 
  async function handleAdd(e: SyntheticEvent) {
    e.preventDefault();
    await addNewTodo(todo);
    setTodo({ title: '', isComplete: false });
  }
  const [todo, setTodo] = useState({title: '', isComplete: false})

  return (
    <>
      <div className='flex justify-between align-center items-center'>
        <h1 className='text-4xl text-white font-bold'>TODO</h1>
        <ToggleDarkMode/>
      </div>
      <form onSubmit={handleAdd}>
        <div className='flex w-full my-6 bg-white dark:bg-gray-800 rounded shadow justify-center py-3 px-4'>
          <div className='rounded-full border-2 h-4 w-4 mr-3 dark:border-slate-600'></div>
          <input
            type='text'
            name='title'
            onChange={(e) => setTodo({...todo, title: e.target.value})}
            value={todo.title}
            placeholder='Create a new todo...'
            className='placeholder-slate-300 dark:bg-gray-800 text-slate-600 dark:text-slate-300 text-sm border-0  outline-none focus:outline-none w-full h-full rounded '
          />
        <input type='submit' hidden value="Submit"/>
        </div>    
      </form>
    </>
  );
};

export default Header;
