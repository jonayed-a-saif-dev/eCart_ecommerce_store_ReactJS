import { Trash,CreditCard,ShoppingBag,X } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem'; 
import { clearCart } from '../store/cartSlice';

function CartSidebar({isOpen, onClose}) {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  //const totalItems =items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items
  .reduce((total, item) => total + item.price * item.quantity, 0)
  .toFixed(2);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
        {/* Backdrop */}  
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}/>
        {/* Sidebar */}  
        <div className={`fixed right-0 top-0 w-3/12  h-full bg-white shadow-2xl z-50 transition-transform duration-300 transform ease-in-out
          ${isOpen ? "translate-x-0" :"translate-x-full"}`}>
            {/* Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                <h2 className='text-xl font-bold text-gray-900 flex items-center space-x-2'>
                    <ShoppingBag className='w-6 h-6' />
                    <span className=''>Shopping Cart</span>
                </h2>
                <button className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'> 
                    <X className='w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer'
                    onClick={onClose} />
                </button>
            </div>


            {/* Cart Items */}
            <div className='p-6 flex-1 overflow-y-auto'>
              {items.length === 0 ? (
                <div className='text-center py-12'>
                <ShoppingBag className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                <p className='text-gray-500 text-lg mb-2'>Your Cart is Empty</p>
                <p className='text-gray-400 text-sm '>Add some product to get started</p>
              </div>
              ) : (
                <div className='space-y-4'>
                  {items.map((item) =>{
                    return <CartItem key={item.id} item={item} />  
                  })}
                </div>
              )}
            </div>  


            {/* Footer */}
              {items.length > 0 && (
                 <div className='p-6 border-t border-gray-200 bg-gray-50'>
                <div className='flex items-center justify-between mb-4'>
                    <span className='text-gray-600'>Total:</span>
                    <span className='text-xl font-bold text-gray-900'>${totalPrice}</span>
                </div>
                <button className='w-full bg-violet-500 text-white py-3 rounded-lg hover:bg-violet-600 hover:scale-105 transition-all transform duration-200 cursor-pointer mb-2 items-center flex justify-center space-x-2
                '>
                  <CreditCard className='w-5'/>
                  <span>Proceed to Checkout</span>
                </button>
                <button className='w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 hover:scale-105 transition-all transform duration-200 cursor-pointer flex items-center justify-center space-x-2
                '
                onClick={handleClearCart}>
                   <Trash className='w-4 h-4' />
                  <span>Clear Cart</span>
                </button>
            </div>
              )}
        </div>
        
    </>
  );
    
}

export default CartSidebar;
