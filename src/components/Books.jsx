import React from 'react';
import { useFetch } from '../hooks/useFetch';
import CoverImage from './CoverImage';
import { Link } from "react-router-dom";
import '../components/Book.css'


const Books = ({ categoryID }) => {
  const { data: books, isPending, error } = useFetch(`https://assign-api.piton.com.tr/api/rest/products/${categoryID}`);

  return (
    <div className="flex flex-wrap">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {books && (
  books.product.map((product) => (
    <div key={product.id} className="w-1/2 p-2">
      <Link to={`/product/${product.id}?name=${categoryID}`}>
        <div className='flex flex-wrap items-start border-solid border-2 border-[#0909371a] bg-[#F4F4FF] rounded'>
          <div className="w-full md:w-1/2 md:pr-4">
            <CoverImage coverName={product.cover} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-between h-full ">
            <div>
              <b className="block mb-2 mt-10 text-4xl">{product.name}</b>
              <p className="mb-2 text-2xl text-grey">{product.author}</p>
            </div>
            <p className="mt-20 text-[#6251DD] text-5xl">{product.price} $</p>
          </div>
        </div>
      </Link>
    </div>
  ))
)}


    </div>
  )
}

export default Books;
