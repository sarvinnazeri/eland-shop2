"use client"
import React from 'react'
import { useState } from 'react'

export default function Mouse({ data }) {
    const [stat, setStat] = useState(false);

    const mouse = () => {
        stat ? setStat(false) : setStat(true)
    };


    return (
        <div className=' w-full'>
            <div className='w-full flex flex-wrap  *:text-black justify-end mt-2' >
                <span className='py-5 px-10 rounded-lg  border border-b-orange-400 bg-white border-b-2 cursor-pointer'
                    onClick={mouse}
                    style={{
                        borderBottom: stat ? '2px solid orange' : '2px solid rgb(228,231,235)',
                        background: stat ? 'rgb(249,249,249)' : 'white'
                    }}
                >توضیحات کالا
                </span>
                <span className='py-5 px-10 rounded-lg border cursor-pointer bg-white border-b-orange-400'
                    onClick={mouse}
                    style={{
                        borderBottom: stat ? '2px solid rgb(228,231,235)' : '2px solid orange',
                        background: stat ? 'white' : 'rgb(249,249,249)'
                    }}
                >مشخصات کالا</span>
            </div>
            <div className='shadow-xl p-10 *:text-black mb-10 h-[200px] rounded-md'>
                {stat ? (
                    <div>
                        <span>{data.description}</span>
                    </div>
                ) : (
                    <div className='flex flex-wrap *:w-full'>
                        <span>rate : 6/10 </span>
                        <span>number of the product: 10</span>
                        <span>the approval code : 1255123321</span>

                    </div>

                )}
            </div>
        </div >
    )
}
