"use client";
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        icon={<IoCartOutline size={40} className='text-blue-700' />}
        label='Contador'
        subtitle='Productos agregados'
        href='/dashboard/counter'
      />
      {/* <SimpleWidget /> */}
    </div>
  )
}
