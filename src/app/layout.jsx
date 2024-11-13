"use client"
import "./css/globals.css";
import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [bodyC, setBodyC] = useState(false)
  return (
    <html lang="en">
      <body className="relative bg-white">
        <div className="absolute left-0 top-0 w-full h-full "
          style={{
            zIndex: bodyC ? '100' : '-100',
            backgroundColor: bodyC ? 'rgba(110,100,99,0.60)' : 'transparent'
          }}
        >
        </div>
        <Header bodyC={bodyC} setBodyC={setBodyC} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header({ bodyC, setBodyC }) {
  const [clickedItem, setClickedItem] = useState(null);
  const [clickSubMenu, setClickSubMenu] = useState(null);
  const [color, setColor] = useState(false);
  const menuRef = useRef(null)

  const menuItems = [
    'آرایشی',
    'بهداشتی و مراقبتی',
    'محصولات آقایان',
    'لوازم شخصی برقی',
    'مادر و کودک',
    'عطر و ادکلن',
    'کارت هدیه',
    '|',
    'برندها',
    'مجله'
  ];




  const subMenu = {
    'آرایشی': {
      'آرایش صورت': ['موس صورت', 'برنزه کننده صورت', 'رژگونه', 'دی دی کرم', 'کرم روز', 'کوشن', 'کانسیلر',],
      'آرایش چشم': ['پرایمر چشم', 'خط چشم', 'لنز رنگی', 'مداد چشم', 'ریمل چشم', 'مژه و چسب مژه', 'سایه چشم'],
      'آرایش لب': ['پرایمر لب', 'رژ لب', 'مداد لب', 'ماژیک و لاک لب', 'تینت لب'],
      'آرایش ابرو': ['ژل حالت دهنده ابرو', 'سایه ابرو', 'ماژیک ابرو', 'ریمل ابرو', 'صابون ابرو', 'مداد ابرو', ' رنگ ابرو'],
      'آرایش مو': ['محصولات رنگ مو', 'حالت دهنده های مو'],
      'آرایش ناخن': ['بیس کت', 'مواد کاشت ناخن', 'تاپ کت', 'لاک ناخن', 'کوکتل پدیکور', 'لاک پاک کن', 'ناخن مصنوعی و چسب ناخن', 'وسایل طراحی ناخن'],
      'آرایش بدن': ['شیمر و هایلایت بدن'],
      'ابزار آرایشی': ['وسایل آرایش مو', 'تیغ اصلاح صورت و ابرو', 'موچین ابرو', 'اپلیکاتور مژه', 'ابزار مانیکور و پدیکور', 'استند لوازم آرایشی'],
      'احیا کننده محصولات آرایشی': [],
      'ست لوازم آرایش': [],
    },
    'بهداشتی و مراقبتی': [
      'بهداشت صورت', 'پاک کننده های صورت', 'مراقبت از بدن', 'مراقبت از مو', 'اصلاح صورت و بدن', 'دئودورانت و ضد تعریق', 'دهان و دندان', 'بهداشت جنسی', 'محصولات سلولزی', 'بهداشت و سلامت', 'ست محصولات بهداشتی و مراقبتی'
    ],
    'محصولات آقایان': [
      'مو آقایان', 'پوست آقایان', 'اصلاح آقایان', 'دئودورانت و ضد تعریق آقایان', 'عطر و ادکلن آقایان', 'ست محصولات آقایان'
    ],
    'لوازم شخصی برقی': [
      'لوازم برقی صورت و بدن', 'حالت دهنده مو برقی', 'لوازم برقی سلامت و بهداشت'
    ],

    'مادر و کودک': {
      'محصولات بهداشت و مراقبت مادر': ['کرم های مادر', 'شیردوش مادر'],
      'محصولات بهداشت و مراقبت کودک': ['روغن بچه گانه', 'لوسیون بچه گانه', 'صابون بچه', 'بالم لب بچه گانه', 'شامپو بچه گانه', 'شامپو بدن بچه گانه', 'ضد آفتاب بچه گانه', 'دستمال مرطوب بچه گانه', 'کرم بچه گانه', 'گوش پاک کن بچه گانه', 'دهانشویه بچه گانه', 'پوشک بچه گانه'],
      'ملزومات کودک و نوزاد': ['شیشه شیر کودک', 'پستانک نوزاد', 'ناخن گیر کودک'],
      'ست محصولات مادر و کودک': []
    },

    'عطر و ادکلن': {
      'عطر و ادکلن زنانه': ['پرفیوم', 'ادو پرفیوم', 'ادو تويلت'],
      'عطر و ادکلن مردانه': ['پرفیوم', 'ادو پرفیوم', 'ادو تويلت', 'عطر جيبي'],
      'عطر و ادکلن اسپرت': ['پرفیوم', 'ادو پرفیوم', 'ادو تويلت', 'عطر جيبي'],
      'عطر و ادکلن بچه گانه': [],
      'ست هدیه عطر و ادکلن': [],
      'عطر مو': []

    },
  }
  const handleClick = (index) => {
    setClickedItem(clickedItem === index ? null : index);
    setColor(clickedItem !== index);
    setBodyC(clickedItem !== index);

  }
  const handleClickSubMenu = (item, subItem) => {
    setClickSubMenu(clickSubMenu === subItem ? null : subItem);

  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClickedItem(null);
      setClickSubMenu(null);
      setColor(false);
      setBodyC(false);
    }
  }




  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => { document.removeEventListener('mousedown', handleClickOutside); };
  }, []);
  return (
    <header className="mb-10">
      <div className="w-full bg-[rgb(243,109,55)] py-2 text-white font-bold overflow-hidden fixed z-[100] ">
        <span className="animate-slide w-full flex">70 هزار تومان تخفیف برای سفارش های بالای 700 هزار تومان با کد ABAN</span>
      </div>
      <div className="w-full bg-white flex justify-center items-center">
        <div className="w-full h-[130px]"></div>
        <div className="w-[90%] rounded-md top-[40px] backdrop-blur-md fixed h-[130px] shadow-md z-[100] px-4 flex flex-wrap"
          style={{ backgroundColor: color ? 'rgb(242,243,245)' : 'transparent' }}>
          <div className="w-full flex mt-4 justify-between">
            <div className="flex justify-center items-center">
              <Link href={'/basket'}>
                <img src={'/icon/1.png'} alt="" className="w-[30px] h-[30px] object-cover mx-3" />
              </Link>
              <Link href={'/profile'}>
                <img src={'/icon/2.png'} alt="" className="w-[30px] h-[30px] object-cover" />
              </Link>
            </div>
            <img src={'/img/logo.svg'} alt="logo" className="w-[200px]" />
            <input
              placeholder="جست و جو در بین کالاها"
              className="bg-gray-200 w-[300px] pe-3 py-2 justify-end md:flex text-right hidden "
            />
          </div>
          <div className="w-full" ref={menuRef}>
            <ul className="flex *:mx-2  my-4 justify-end *:text-[black]">
              {menuItems.map((item, index) => (
                <Link href={'/arayesh'} key={index}>
                  <li className="group cursor-pointer md:text-[15px] text-[13px] text-right" onClick={() => handleClick(index)}>
                    <span>{item}</span>
                    {clickedItem === index && subMenu[item] && (
                      <div className="absolute top-[110px] left-0 w-full h-auto bg-gray-100 pb-10 pt-5 rounded-b-md justify-center  flex">
                        <div className="bg-white w-[95%] rounded-md shadow-md justify-center  ">
                          <ul className="flex *:mx-2 justify-end content-center items-center h-full *:text-[15px]">
                            {Array.isArray(subMenu[item])
                              ? (
                                <ul className="flex *:mx-2 justify-end content-center items-center h-full *:text-[15px] flex-wrap">
                                  {subMenu[item].map((val, i) => (
                                    <li key={i} className="flex justify-center py-2 px-4">{val}</li>
                                  ))}
                                </ul>
                              ) : (
                                Object.entries(subMenu[item]).map(([key, value]) => (
                                  <div key={key} className="my-2 items-start content-start flex ">
                                    <strong className="block mb-2" onMouseEnter={() => handleClickSubMenu(item, key)}>{key}</strong>
                                    {clickSubMenu === key && (
                                      <div className="absolute top-[60px] left-0 w-full flex rounded-b-md pb-2 bg-gray-100">
                                        {value.reduce((acc, subVal, i) => {
                                          if (i % 2 === 0) acc.push([]);
                                          acc[acc.length - 1].push(subVal);
                                          return acc;
                                        }, []).map((subArray, j) => (
                                          <ul key={j} className="w-full flex flex-wrap bg-gray-100  content-center items-center justify-end px-10">
                                            {subArray.map((subVal, i) => (
                                              <li key={i} className="flex w-full py-2 justify-end px-4 ">
                                                <span className="w-fit">{subVal}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))
                              )}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center flex-wrap border">
      <div className="flex w-full text-[black] justify-center items-center py-2">
        <ul className="flex *:mx-2 *:w-[25px]">
          <li>
            <img src="/svg/insta.svg" alt="Instagram" />
          </li>
          <li>
            <img src="/svg/linkdin.svg" alt="LinkedIn" />
          </li>
          <li>
            <img src="/svg/twitter.svg" alt="Twitter" />
          </li>
        </ul>
        <span className="font-bold">ما را در شبکه های اجتماعی دنبال کنید</span>
      </div>
      <div className="bg-gray-200 flex w-full p-5 flex-wrap justify-center">
        <div className="w-full sm:w-[50%]">
          <div className="flex justify-center *:shadow-md *:mx-5 h-full items-center">
            <img src={'/img/logo.png'} alt="" className="p-3 h-[100px] object-contain border border-gray-300" />
            <img src={'/img/logo2.png'} alt="" className="p-3 h-[100px] object-contain border border-gray-300" />
          </div>
        </div>
        <div className="flex flex-wrap text-[black] text-end justify-end w-full sm:w-[50%]">
          <h2 className="w-full">خبرنامه</h2>
          <p className="w-full">برای دریافت آخرین اخبار و تخفیف های برندها به خبرنامه ما بپیوندید.</p>
          <div className="sm:w-[300px] w-full">
            <label className="sr-only" htmlFor="email-newsletter">
              آدرس ایمیل خود را وارد کنید
            </label>
            <div className="flex mb-5 my-2">
              <button className="bg-black text-white rounded-l-md px-4">ثبت نام</button>
              <input
                type="text"
                className="form-control border rounded-r-md p-2 flex-grow justify-end text-right"
                id="email-newsletter"
                name="email-newsletter"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex *:text-end p-5">
        <div className="flex *:text-[black] w-full justify-center *:my-3 flex-wrap">
          <ul className="sm:w-auto items-center">
            <li>فروشگاه اینترنتی الانزا | عرضه کننده محصولات آرایشی، بهداشتی و عطر و ادکلن</li>
            <li className="">
              <a href="mailto:sarvinnazeri@gmail.com" className="text-[13px] justify-center items-center">sarvinnazeri@gmail.com</a>
              <span className="px-2">:ايميل</span>
            </li>
            <li className="flex flex-wrap justify-end *:text-[end] *:w-full">
              <div>
                <a href="tel:02191008292" className="text-[13px] justify-center items-center">02191008292</a>
                <span className="px-2">تلفن تماس پشتیبانی</span>
              </div>
              <div>
                <a href="tel:02188203882" className="text-[13px] justify-center items-center">88203882 021</a>
                <span className="px-2">تلفن تماس</span>
              </div>
              <div>
                <a href="#" className="text-[13px] justify-center items-center">تهران، ولیعصر، بالاتر از میدان ونک، کوچه خلیل زاده، پلاک ۴۱، طبقه اول</a>
                <span className="px-2">آدرس:</span>
                <a href="#" className="text-[13px] justify-center items-center">1969754864</a>
                <span className="px-2">کدپستی:</span>
              </div>
            </li>
          </ul>
          <ul className="sm:w-auto ml-20 w-full">
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>همکاری با الانزا</li>
          </ul>
          <ul className="sm:w-auto ml-20 w-full">
            <li>ارسال و بازگشت کالا</li>
            <li>شرایط و ضوابط</li>
            <li>سیاست حفظ حریم خصوصی</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-[black] justify-center flex bg-gray-200 p-5">
        <p className="text-center">تمامی حقوق این سایت برای شرکت اکسون دایا لوتوس (فروشگاه آنلاین الانزا) محفوظ است | 2020 @ copyright</p>
      </div>
    </footer>
  );
}
