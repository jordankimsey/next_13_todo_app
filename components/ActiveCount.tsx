'use client';
import React from 'react';
import useTodo from '@/components/TodoContext';

const ActiveCount = () => {
  const { activeCount } = useTodo();
  return (
    <div>
      <p className=''>
        {activeCount}
        Items Left
      </p>
    </div>
  );
};

export default ActiveCount;
