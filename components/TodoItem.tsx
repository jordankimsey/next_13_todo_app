'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Image from 'next/image';
import x from '../public/images/icon-cross.svg';
import check from '../public/images/icon-check.svg';
import { todoType, updateTodo } from '@/utils/apiCalls';
import useTodo from './TodoContext';

const TodoItem = ({ todo }: { todo: todoType }) => {
  const { toggleCompleted, deleteTodo } = useTodo();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  async function handleChange(todo: todoType) {
    setIsFetching(true);
    // Mutate external data source
    toggleCompleted(todo);
    //await updateTodo(todo);
    setIsFetching(false);
  
  }

  async function handleDelete(todo: todoType) {
    console.log('Deleting...', todo._id);
    const id = todo._id
   const deleteT = await deleteTodo(id);
   console.log('delete', deleteT)
   
  }

  return (
    <div className='flex items-center px-4 border-b border-slate-200 dark:text-slate-300 dark:border-slate-600'>
      <div
        onClick={(e) => handleChange(todo)}
        className='flex w-full items-center py-3 cursor-pointer'
      >
        <div className='rounded-full border-2 dark:border-slate-600 h-4 w-4 mr-3 flex items-center'>
          {todo.isComplete && (
            <div>
              <Image src={check} alt={'check'} />
            </div>
          )}
        </div>
        <div>
          <h3 className={`${todo.isComplete && 'line-through'}`}>
            {todo.title}
          </h3>
        </div>
      </div>
      {!todo.isComplete && (
        <div onClick={(e) => handleDelete(todo)} className='cursor-pointer'>
          <Image src={x} alt={'cross'} />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
