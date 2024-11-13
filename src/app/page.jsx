"use client";
import Link from 'next/link.js';
import React, { useState, useEffect } from 'react';
import Carousel from './swipper/page.jsx';
import Carousel2 from './swipper2/page.jsx';
export default function Page() {
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
  const [content3, setContent3] = useState([]);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (data && data.length > 0) {
      setContent1(data.slice(2, 6)); // Adjusted to get 3rd to 5th products
      setContent2(data.slice(6, 10)); // Adjusted to get 6th to 9th products
      setContent3(data.slice(10, 14)); // Adjusted to get 10th to 13th products
    }
  }, [data]);

  const img1 = [
    '/img/1.webp',
    '/img/2.webp',
  ];
  const img2 = [
    '/img/3.webp',
    '/img/4.webp',
    '/img/5.webp',
    '/img/6.webp',
  ];
  const img3 = [
    '/img/0ae27fa806e6deca874de9e91b3c5158.webp',
    '/img/c575a568526f2f05437a629369f8129d.webp',
  ];
  const img4 = [
    '/img/11.webp',
    '/img/33.webp',
    '/img/44.webp',
    '/img/55.webp',
    '/img/66.webp',
    '/img/77.webp',
    '/img/88.webp',
  ];

  return (
    <div className='*:my-20'>
      <Carousel imageSrc={img3} />
      <ProductsSwipper content={content1} />
      <Part3 imageSrc={img1} />
      <ProductsSwipper content={content2} />
      <Part3 imageSrc={img2} />
      <ProductsSwipper content={content3} />
      <Part4 />
      <Carousel2 imageSrc={img4} />
    </div>
  );
}



function Part4() {
  return (
    <div className='bg-white justify-center flex flex-wrap *:mb-10 *:text-black'>
      <div className='flex flex-wrap *:w-[13%] justify-around w-[90%]'>
        <img src="/img/free_delivery.svg" alt="" />
        <img src="/img/guarantee.svg" alt="" />
        <img src="/img/price.svg" alt="" />
        <img src="/img/return.svg" alt="" />
      </div>
      <div className='justify-center flex flex-wrap w-full'>
        <h2 className='text-center w-full font-bold text-[20px] my-5 '>فروشگاه اینترنتی لوازم آرایشی و بهداشتی الانزا</h2>
        <p className='text-end w-[90%] leading-10 text-[19px] text-gray-600'>فروشگاه اینترنتی لوازم آرایشی الانزا عرضه کننده انواع لوازم آرایشی و بهداشتی از برندهای معتبر و با کیفیت داخلی و خارجی است که از سال 1398 فعالیت خود را در زمینه فروش آنلاین لوازم آرایشی و بهداشتی آغاز کرده و با توجه به مدت زمان کوتاه فعالیتش، توانسته سهم بزرگی را در این مارکت به خود اختصاص دهد.

          این سایت لوازم آرایشی با هدف فراهم کردن تمامی نیازهای آرایشی و بهداشتی که یک فرد در جهت حفظ زیبایی و بهبود بهداشت فردی خود به آن ها احتیاج دارد، تلاش می کند تا محصولات با کیفیتی را در اختیار شما خریداران محترم قرار دهد

          خوشبختانه خرید لوازم آرایشی از این سایت به دسته یا برند خاصی محدود نمی شود و شما خریداران عزیز می توانید تنها با چند کلیک، تمامی محصولات آرایشی و بهداشتی مورد نظر خود مانند سایه چشم، رژ گونه، پنکک، ماسک صورت، شامپو، دئودورانت، ضد آفتاب، لوسیون بدن و ... را با مناسب ترین قیمت لوازم آرایشی از الانزا تهیه کنید.

          محصولات موجود در سایت لوازم آرایشی الانزا علاوه بر تنوع بالا، دارای کیفیت مطلوب و ضمانت اصالت کالا نیز هستند. برای مثال معمولاً خرید عطر و ادکلن به صورت آنلاین و بدون استشمام برای برخی افراد دور از ذهن به نظر می رسد؛ اما کیفیت بالای عطر و ادکلن های الانزا، قطعاً تجربه ای عالی را در این زمینه برای شما به وجود می آورند.

          همچنین فروشگاه اینترنتی لوازم آرایشی و بهداشتی الانزا، جهت رضایت مصرف کنندگان علاوه بر تحویل تمامی سفارشات درب منزل، امکان پیگیری روند ارسال و پشتیبانی محصولات را نیز برای خریداران فراهم آورده است. از این رو خریداران عزیز می توانند با شماره تماس 02191008292 _ 02188203882 و یا از طریق شبکه های اجتماعی نسبت به پیگیری سفارشات خود اقدام کنند.

        </p>
      </div>
    </div>
  )
}


function Part3({ imageSrc }) {

  return (
    <div className='flex w-full justify-center'>
      <figure className='w-[80%] flex justify-center flex-wrap'>
        {imageSrc.map((val, i) => (
          <img src={val} key={i} alt="Dynamic Content" className='w-[45%]' />
        ))}
      </figure>
    </div>
  )
}


function ProductsSwipper({ content }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [date, setDate] = useState('');
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const updateItemsPerSlide = () => {
    setItemsPerSlide(window.innerWidth <= 768 ? 1 : 3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const showSlide = (index) => {
    const totalSlides = Math.ceil(content.length / itemsPerSlide);
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, content, itemsPerSlide]); // Depend on content to update slides correctly

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(dateInterval);
  }, []);

  return (
    <div className="relative w-3/4 overflow-hidden mx-auto border bg-orange-500 p-2 rounded-md flex-wrap flex justify-center items-center">
      <div className='bg-orange-500 w-full text-white flex justify-between p-5'>
        <span> مشاهده بیشتر</span>
        <h3 className='text-[20px] font-bold'>زمان باقی‌مانده : {date}</h3>
        <span></span>
      </div>
      <div className=' justify-center flex flex-wrap bg-white px-5'>

        <div className='w-[99%] bg-white flex'>
          <div className='w-full flex'>
            {content.length > 0 ? (
              content.slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide).map((val) => {
                let x = val.id
                return (
                  <Link href={'arayesh/' + x} className='w-full md:w-1/3' key={val.id}>
                    <div className="w-full text-black text-center p-3">
                      <div className='rounded-md shadow-lg w-full justify-center flex flex-wrap p-5 h-[400px]'>
                        <div className='w-full justify-start flex my-2'>
                          <span className='rounded-xl bg-[rgb(248,115,21)] text-[white] text-[13px] px-2 h-[25px] items-center flex'>15%</span>
                        </div>
                        <figure className='w-full justify-center flex h-[100px]'>
                          <img src={val.image} alt={val.title} className='object-contain' />
                        </figure>
                        <div className='my-2 h-[100px]'>
                          <span className='w-full justify-end text-right flex my-2 text-[13px] h-[80px]'>{val.title}</span>
                          <div className='flex justify-end w-full rounded-xl'>
                            <span>فروشنده :</span>
                            <span>الانزا</span>
                          </div>
                          <h2>{val.name}</h2>
                          <div className='flex w-full justify-between h-[30px] items-center my-2'>
                            <span className='bg-[rgb(248,115,21)] px-2 py-1 text-[white] text-[13px] rounded-lg'>{Number((val.price) - 2)} $</span>
                            <span className='bg-[rgb(247,247,247)] px-2 py-1 text-[black] text-[13px] rounded-lg'>{val.price} $</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            ) : (
              <p className='text-black text-center p-20'>No products available</p>
            )}
          </div>
          <button
            className="absolute left-[15px] top-1/2 transform -translate-y-1/2 text-[rgb(248,115,21)] text-[25px] bg-opacity-50 p-2"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-[rgb(248,115,21)] text-[25px] bg-opacity-50 p-2"
            onClick={nextSlide}
          >
            ❯
          </button>
          <figure className='object-cover w-[20%] p-3 items-center flex'>
            <img src="/img/41f267bc857c12100db14c8bdade0c1d.webp" alt="" className='rounded-xl w-full' />
          </figure>
        </div>
      </div>
    </div>
  );
};

