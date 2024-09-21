
import { CartCounter } from '@/shopping-cart';
import React from 'react';

export const metadata = {
  title: "Counter Page",
  description: "Counter page for client side component",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={ 20 } />
    </div>
  );
}