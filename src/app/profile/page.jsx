import React from 'react'

export default function Login() {
    return (
        <div className='justify-center flex my-20 *:text-black'>
            <div className=' p-10 rounded-lg w-[500px] bg-[rgb(244,244,244)] justify-center flex flex-wrap '>
                <figure className='w-full justify-center flex'>
                    <img src={'/icon/2.png'} alt="" />
                </figure>
                <h2 className='w-full flex justify-center font-bold text-[19px] my-5'>ورود یا ثبت نام</h2>
                <p className='w-full flex justify-center mt-5'>برای ورود به حساب کاربری خود شماره همراه یا ایمیل خود را وارد نمایید</p>
                <div className='mt-7'>
                    <input type="text" placeholder='شماره موبایل یا ایمیل' className='w-[200px]  rounded-md text-[15px] px-2 py-1 text-right' />
                </div>
                <div className='w-full justify-center flex mt-2 mb-5'>
                    <button className='bg-black text-[white] px-2 py-1 w-[200px] rounded-md'>ورود</button>
                </div>
                <br />
                <div>
                    <i></i>
                    <span>ورود با گوگل</span>
                </div>
            </div>
        </div>
    )
}
