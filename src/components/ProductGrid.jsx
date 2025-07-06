import React from 'react'
import ProductCard from './ProductCard';
import { products } from '../data/products';


function ProductGrid() {
 

  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='text-center mb-'>
          <h2 className='text-4xl font-black text-gray-900 mb-6'>
            Features Products
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-6'>
            Discover our exclusive range of products designed to enhance your lifestyle. From the latest gadgets to stylish apparel, we have something for everyone. Shop now and experience quality like never before!
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default ProductGrid
