'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import React from 'react'

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count:  number;
}

const getAPICounter = async (): Promise<CounterResponse> => {
  const data: CounterResponse = await fetch('/api/counter').then(response => response.json());
  console.log(data);
  return data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CartCounter = ({ value = 0 }: Props) => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  React.useEffect(() => {
    getAPICounter().then(data => {
      dispatch(initCounterState(data.count));
    });
  }, [dispatch])

  return (
    <>
      <span className="text-9xl font-bold">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  )
}
