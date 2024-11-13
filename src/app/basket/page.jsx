"use client";
import React from 'react';
import useCart from '../store';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Basket() {

    const cart = useCart((state) => state.cart);
    const removeFromCart = useCart((state) => state.removeFromCart);
    const plusFromCart = useCart((state) => state.plusFromCart);
    const minusFromProduct = useCart((state) => state.minusFromProduct)
    const loadFromLocalStorage = useCart((state) => state.loadFromLocalStorage);
    useEffect(() => { loadFromLocalStorage(); }
        , [loadFromLocalStorage]);

    return (
        <section className='justify-center flex  flex-wrap *:text-black my-28'>

            {cart.length === 0 ? (
                <div className='w-full justify-center flex flex-wrap'>
                    <figure className='w-[80%] rounded-lg flex flex-wrap justify-center items-center p-20 bg-[rgb(244,244,244)]'>
                        <img src="/img/basket.svg" alt="basket icon" className='w-[40%] mb-5' />
                        <figcaption className='w-full text-black justify-center flex my-5'>هیچ آیتمی در سبد خرید شما نیست!</figcaption>
                        <Link className='bg-black text-white py-1 px-10 rounded-lg ' href={'./arayesh'}>خرید</Link>
                    </figure>
                    <div className='w-[80%] rounded-lg flex flex-wrap items-center p-10 my-5 justify-around bg-[rgb(244,244,244)]'>
                        <button className='bg-[rgb(85,85,85)] w-[300px] py-1 rounded-md text-white'>تایید</button>
                        <input type="text" placeholder='كد تخفيف' className='w-[500px] rounded-md px-2 py-1 border border-black justify-end flex text-end' />
                    </div>
                </div>
            ) : (
                <div className='w-[80%] rounded-lg bg-[rgb(244,244,244)] '>
                    <ul className="flex flex-wrap justify-center">
                        {cart.map((product, i) => (
                            <li key={product.id}
                                className="w-[99%] my-1 bg-white rounded-md p-2 flex flex-wrap justify-end ">
                                <h2 className="w-full font-bold">{product.title}</h2>

                                <div className="w-full flex my-5 ">
                                    <img src={product.image} alt="" className="w-[40px] object-contain mx-5" />
                                    <div className=" border-l-2  flex flex-wrap *:w-full text-right *:px-5 *:justify-start *:flex">
                                        <button onClick={() => removeFromCart(product.id)} className='items-center'>
                                            <img src={'/icon/bin.png'} alt="" className='w-[18px] mr-2' />
                                            Remove
                                        </button>
                                        <button onClick={() => plusFromCart(product.id)} className='items-center'>
                                            <img src={'/icon/plus.png'} alt="" className='w-[18px] mr-2' />
                                            add
                                        </button>
                                        <button onClick={() => minusFromProduct(product.id)} className='items-center'>
                                            <img src={'/icon/minus.png'} alt="" className='w-[18px] mr-2' />
                                            minus
                                        </button>
                                    </div>
                                    <div className="border-l-2 flex flex-wrap *:w-full text-right px-5 justify-start *:justify-start *:flex">
                                        <span>price {Number(product.price) + 3}</span>
                                        <span>special price {product.price}</span>
                                        <span>final price {(product.price) * (product.num)}</span>
                                    </div>

                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </section>
    );
}
