import { Star } from 'lucide-react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 


function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    };


    const renderStart = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-4 w-4 text-yellow-500 
                    ${index < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                    }`}
             />
        ));
    };       
  return (
    <div className='bg-white rounded-2xl shadow:md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-105'>
        <div className='relative overflow-hidden transform hover:scale-105 transition-all duration-500 group'>
            <img src={product.image} alt={product.name} className='w-full h-64 object-cover group-hover:scale-110 transition-all duration-500' />
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <span className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full text-sm font-medium'>
                    {product.category}
                </span>
            </div>
        </div>
        <div className='p-6'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>{product.name}</h3>
            <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{product.description} </p>
            <div className='flex items-center mb-4'>
                <div className='flex items-center space-x-2 '>{renderStart(product.rating)}</div>
                <span className=''>{product.rating}  ({product.reviews} reviews)</span> 
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold text-gray-900'>${product.price.toFixed()}</span>
                <button className='group/btn bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 cursor-pointer'
                onClick={handleAddToCart}>
                   <span className='font-medium' > Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProductCard;
