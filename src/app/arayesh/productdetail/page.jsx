"use client";

import React, { useEffect, useState } from 'react';
import useCart from '@/app/store';
import ImageZoom from '../zoom/page';
import Mouse from '../mouse/page';
import Link from 'next/link';

const ProductDetails = ({ data }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const addToCart = useCart((state) => state.addToCart);

    useEffect(() => {
        if (data) {
            setProduct(data);
            setLoading(false);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <main className='mt-[100px] flex justify-center items-center w-full flex-wrap mx-auto'>
            <div className='flex w-[90%] justify-end px-5 mb-2 '>
                <Link href='#' className='text-black'>{product.title}</Link>
                <span className='text-[black] mx-2'>|</span>
                <Link href='#' className='text-black'>الانزا</Link>
            </div>
            <div className='rounded-lg flex w-[90%] flex-wrap justify-center items-center content-start bg-[rgb(244,244,244)] border'>
                <figure className='p-20 bg-white w-full md:w-[60%] justify-center flex  cursor-pointer'>
                    <ImageZoom src={product.image} alt={product.title} />
                </figure>
                <div className='px-8 flex flex-wrap w-full md:w-[40%] justify-start items-start'>
                    <h2 className='w-full text-[black] text-[20px] text-right'>{product.title}</h2>
                    <div className='flex flex-wrap my-2'>
                        <span className='bg-[rgb(243,109,55)] rounded-lg text-white px-2 p-1 text-[13px] mr-2'>30%</span>
                        <span className='text-black'>{product.price}</span>
                    </div>
                    <span className='text-[rgb(243,109,55)] my-1 w-full text-[20px] font-bold'>{(product.price - 2.3).toFixed(2)}</span>
                    <button className='rounded-md shadow-md uppercase bg-[rgb(52,58,63)] py-2 w-full text-white' onClick={() => { addToCart(product) }}>add to cart</button>
                    <div className='text-black border  flex flex-wrap border-gray-300 rounded-sm w-full my-2 *:py-1 justify-center'>
                        <span className=' w-[70%]'>پرداخت قسطی اسنپ پی</span>
                        <i></i>
                        <span className='text-[rgb(112,188,158)] w-[70%]'>۴ قسط بدون کارمزد، ماهانه ۱۰۹٬۹۰۰ تومان</span>
                    </div>
                    <div className='w-full *:w-full flex flex-wrap justify-end *:my-1 mt-5 *:text-black'>
                        <span className='justify-end flex'>فروشنده:  الانزا</span>
                        <span className='justify-end flex'>تاریخ انقضا : 06 / 02 / 1406</span>
                        <span className='justify-end flex'>تامین کالا از 2 روز کاری آینده</span>
                    </div>
                </div>

            </div>
            <div className='flex flex-wrap w-[90%] my-10'>
                <Mouse data={product} />
                <div className='w-full text-black justify-end flex flex-wrap bg-white shadow-xl rounded-md py-10 px-5'>
                    <h2>نظر کاربران </h2>
                    <div className='w-full flex flex-wrap justify-end mt-2'>
                        <span className='text-[rgb(243,109,55)]'>ارسال دیدگاه جدید</span>
                        <span className='text-[rgb(243,109,55)] font-bold px-1'>+</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;
