import { Minus, Plus, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem,updateItemQuantity } from '../store/cartSlice';






function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQtyChange = (newQty) => {
    if (newQty <= 0) {
      dispatch(removeItem(item.id))
    }else{
      dispatch(updateItemQuantity({ id: item.id, quantity: newQty }));
    }
  } 

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  }
  return (
    <div className='flex items-center space-x-4 bg-gray-50 rounded-xl'>
      <img src={item.image} alt="" className='w-16 h-16 object-cover rounded-lg' />
      <div className='flex-1 min-w-0'>
        <h4 className='font-medium text-gray-900 truncate'>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      <div className='flex items-center space-x-2'>
        <button className='p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer'
        onClick={() => handleQtyChange(item.quantity - 1)}>
            <Minus className='w-4 h-4' />
        </button>
        <span className='w-8 text-center font-medium'>{item.quantity}</span>
        <button className='p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer'
        onClick={() => handleQtyChange(item.quantity + 1)}>
            <Plus className='w-4 h-4' />
        </button>
      </div>
      <div className='flex items-center space-x-2'>
        <span className='font-bold text-gray'>${item.price * item.quantity}</span>
        <button className='p-1 text-red-500  rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer'
        onClick={handleRemove}>
            <Trash className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default CartItem;
