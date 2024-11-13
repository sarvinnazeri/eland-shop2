"use client";
import React, { useState, useEffect } from "react";
import Carousel2 from "../swipper2/page";
import useCart from "../store";
import Link from "next/link";

export default function Page() {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const addToCart = useCart((state) => state.addToCart);

  const img = [
    '/img/111.webp',
    '/img/222.webp',
    '/img/333.webp',
    '/img/444.webp',
    '/img/555.webp',
    '/img/666.webp',
  ];

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setData(data);
        setStatus('fetched');
      } catch (error) {
        setStatus('error');
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSortOption = (option) => {
    setSortOption(option);
    handleClick();
  };

  const sortData = (data) => {
    switch (sortOption) {
      case "cheapest":
        return [...data].sort((a, b) => a.price - b.price);
      case "mostExpensive":
        return [...data].sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <section className="flex flex-wrap justify-center items-center my-10">
      <div className='flex flex-wrap mt-10 justify-center'>
        <h2 className='w-full text-gray-500 justify-end flex pr-28 font-bold'>
          الانزا| لوازم آرایشی
        </h2>
        <Carousel2 imageSrc={img} />
        <div className='flex flex-wrap w-[90%] justify-center items-start'>
          <div className='w-full flex justify-between my-5 items-center px-14'>
            <div className='flex px-2 items-center'>
              <div className="relative">
                <p className='bg-[rgb(243,109,55)] text-white rounded-lg p-2 cursor-pointer flex items-center' onClick={handleClick}>
                  <svg width="24" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex justify-center">
                    <path d="M12 21L3 12H9V3H15V12H21L12 21Z" fill="white" />
                  </svg>
                  {sortOption}
                </p>
                {clicked && (
                  <div className="w-[120px] border absolute bg-white text-[black] left-0 top-[50px] rounded-lg">
                    <ul className="border p-2 *:text-[16px]">
                      <li className="justify-end flex cursor-pointer" onClick={() => handleSortOption("default")}>پیش فرض</li>
                      <li className="justify-end flex cursor-pointer" onClick={() => handleSortOption("cheapest")}>ارزان ترین</li>
                      <li className="justify-end flex cursor-pointer" onClick={() => handleSortOption("mostExpensive")}>گران ترین</li>
                    </ul>
                  </div>
                )}
              </div>
              <p className='text-black px-5 cursor-pointer'>مرتب سازی</p>
            </div>
            <p className='text-black'>فیلترها</p>
          </div>
          <div className='w-[70%] bg-[rgb(244,244,244)] rounded-lg p-10 mx-5 flex flex-wrap'>
            <h2 className='w-full text-black justify-end flex'>کالا یافت شد {data.length}</h2>
            <div className="w-[90%] flex flex-wrap justify-center *:m-2 ">
              {loading ? (
                <img src="/img/animated_loader_gif_n6b5x0.gif" alt="Loading" className="mx-auto" />
              ) : data.length > 0 ? (
                getPageData(sortData(data)).map((val) => {
                  let x = val.id;
                  return (
                    <Link href={`arayesh/${x}`} key={x}>
                      <figure className="mb-4 p-5 w-[300px] h-fit bg-white rounded-lg flex flex-wrap justify-center">
                        <img src={val.image} alt="" className=" h-[150px] object-contain mt-10 mb-5" />
                        <figcaption className="mt-2 text-gray-700 text-[13px] h-[90px] w-full">
                          {val.title}
                        </figcaption>
                        <p className="w-[100%] bg-gray-200 text-black rounded-md p-1 my-2">{val.price} $</p>
                        <button
                          className="bg-[rgb(243,109,55)] w-[100%] h-fit p-1 rounded-md z-10"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            e.stopPropagation(); // Prevent click event from propagating to the Link
                            addToCart(val);
                          }}
                        >
                          افزودن به سبد خرید
                        </button>
                      </figure>
                    </Link>
                  );
                })
              ) : (
                <p className="text-black">{status}</p>
              )}
            </div>
            <div className="w-full flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`mx-2 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-[rgb(243,109,55)] text-white' : 'bg-gray-200 text-black'}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className='w-[20%] bg-[rgb(244,244,244)] rounded-lg p-3 mx-5 *:p-2'>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">دسته بندی</div>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">برند ها</div>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">کالاهای موجود</div>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">جست و جو در نتایج</div>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">تعداد در بسته</div>
            <div className="bg-[white] rounded-md my-2 پ-2 justify-end flex text-[16px] text-black cursor-pointer text-right">رنگ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
