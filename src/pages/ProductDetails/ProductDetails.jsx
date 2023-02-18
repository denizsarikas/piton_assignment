import { useParams, useLocation, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Header from "../../components/Header"
import CoverImage from '../../components/CoverImage';
import React from 'react'

const ProductDetails = () => {
    const { id } = useParams();
    const CategoryID = new URLSearchParams(useLocation().search).get("name");

    const { data, isPending, error } = useFetch(`https://assign-api.piton.com.tr/api/rest/products/${CategoryID}`);

    const selectedBook = data && data.product.find((element) => element.id === parseInt(id));

    return (
        <>
            <Header />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <div className='mt-20'>
                    <Link to={-1}>
                        <b className="text-2xl ml-5">&lt;Book Details</b>
                    </Link>
                    <div className='flex border-solid border-2 border-sky-500 bg-[#F4F4FF] m-5'>
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                            <CoverImage coverName={selectedBook.cover} />
                        </div>
                        <div style={{ width: '50%' }} className='mr-5'>
                            <h1 className='text-6xl mt-3'>
                                {selectedBook.name}
                            </h1>
                            <p className='text-4xl text-[#00000099]'>
                                {selectedBook.author}
                            </p>
                            <div className='mt-10 not-italic font-normal text-xl leading-7 text-justify'>
                                <b>Summary</b><br />
                                {selectedBook.description}
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <div className="flex items-center mr-12">
                            <button className="flex items-center w-72 h-16 bg-[#EF6B4A] rounded mr-12 not-italic font-bold text-xl leading-7 text-white  justify-between ">
                                <div className="m-2">{selectedBook.price}$</div>
                                <div className="m-2">Buy Now</div>
                            </button>
                        </div>

                    </div>

                </div>
            )}
        </>
    )
}
export default ProductDetails
