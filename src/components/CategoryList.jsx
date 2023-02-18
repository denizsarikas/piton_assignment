import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Books from './Books';
import { Link } from "react-router-dom"
import '../components/CategoryList.css'


const CategoryList = () => {
  const { data: categories, isPending, error } = useFetch(
    'https://assign-api.piton.com.tr/api/rest/categories'
  );

  return (
    <div>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {categories && (
          <div>
            {categories.category.map((category) => (
              <div key={category.id}>
                <div className="h-full bg-white flex justify-between items-center ">
                  <b className='ml-10 text-4xl mt-3'>{category.name}</b>
                  <Link to={`/category/${category.id}?name=${category.name}`}>
                    <h1 className='text-[#EF6B4A] text-xl mr-10'>View All</h1>
                  </Link>
                </div>
                <div>
                    <Books categoryID={category.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
