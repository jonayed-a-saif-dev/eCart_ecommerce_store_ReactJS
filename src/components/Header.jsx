import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

function Header({onToggleCart}) {

    const selectTotalItems = (state) => 
        state.cart.items.reduce((total, item) => total + item.quantity, 0);
    const totalItems = useSelector(selectTotalItems);
  return (
    <div className='bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40 py-2'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center gap-1'>
                    <h2 className='text-4xl font-bold text-gray-900'>eCart</h2>
                </div>
                <div>
                    <input type="text" placeholder='Search Product' className='bg-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 w-2xl'/>
                </div>
                <button className='p-2 bg-gray-300 text-gray-700 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer'
                onClick={onToggleCart}> 
                    <ShoppingCart className='w-6 h-6'/>
                    {totalItems > 0 && (<span className=' top-0 right-0 bg-violet-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center'>
                        {totalItems}
                    </span>)}
                </button>
            </div>
        </div>
    </div>
  );
}

export default Header;
