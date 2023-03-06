import Header from '../components/Header';
import TodoList from '@/components/TodoList';
import type { Metadata } from 'next';
import ActiveCount from '@/components/ActiveCount';
import ToggleButtons from '@/components/ToggleButtons';
import ClearCompleted from '@/components/ClearCompleted';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Todo app',
};

export default async function Home() {
  return (
    <main className='w-full flex justify-center items-center'>
      <div className='max-h-64 w-full bg-hero-mobile-light dark:bg-hero-mobile-dark sm:bg-hero-desktop-light dark:sm:bg-hero-desktop-dark bg-no-repeat bg-cover bg-top-center'>
        <div className='flex flex-col min-h-3/4 mx-auto w-11/12 sm:10/12 md:3/5 lg:w-2/5 pt-20 max-w-xl'>
          <Header />
          <div className='bg-white dark:bg-gray-800 w-full rounded flex flex-col divide-y justify-between divide-slate-200 dark:divide-slate-600'>
            <TodoList />
            <div className='px-4 p-3 flex justify-between items-center text-xs text-slate-400'>
              <ActiveCount />
              <div className=''>
                <ToggleButtons />
              </div>
              <ClearCompleted />
            </div>
          </div>
          <div className='text-center pt-10'>
            <h4 className='text-xs text-slate-400 mr-7'>
              Drap and drop to reorder list
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
