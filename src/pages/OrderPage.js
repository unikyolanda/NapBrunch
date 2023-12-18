import React, { useState, useEffect } from 'react';
import CartList from '../components/CartList';
import banner2 from '../pic/banner3.jpg';
import Link from '../components/Link';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';

function OrderPage() {
    const { orderInfo, handleChange } = useOrder();

    const [dates, setDates] = useState([]);
    useEffect(() => {
        const today = new Date();
        const newDates = [];
        for (let i = 1; i <= 7; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(futureDate.getDate() + i);
            newDates.push(futureDate.toISOString().split('T')[0]);
        }
        setDates(newDates);
    }, []);

    const { cartItems, calculateSubtotal, total, setTotal, coupon, setCoupon } = useCart();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const handleCouponChange = (event) => {
        setCoupon(event.target.value);
    };

    const applyCoupon = () => {
        let currentSubtotal = calculateSubtotal();
        if (coupon === 'NAPBRUNCH666') {
            setTotal(Math.round(currentSubtotal * 0.88));
            setShowSuccess(true);
            setShowError(false);
        } else {
            setTotal(currentSubtotal);
            setShowError(true);
            setShowSuccess(false);
            setTimeout(() => setShowError(false), 1000);
        }
    };


    return(
    <div>
      <div className='relative w-full h-[32rem] overflow-hidden'>
          <img className='flex object-cover h-full w-full items-center' alt="banner" src={banner2} />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
          <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
              <p className='mt-3 text-white text-lg md:text-[27px]'>購物車</p>
              <p className='mt-1 text-white'>Cart</p>
          </div>
      </div>
      <div className='relative flex m-20 justify-center'>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-col items-center justify-center h-24 w-24 bg-green-700 rounded-full'>
            <p className='bg-green-700 text-white'>選擇商品</p>
          </div>
          <svg className="w-5 h-5 text-green-700 m-3 md:m-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <div className='flex flex-col items-center justify-center h-24 w-24 bg-green-700 rounded-full'>
            <p className='bg-green-700 text-white'>輸入資訊</p>
          </div>
          <svg className="w-5 h-5 text-green-700 m-3 md:m-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <div className='flex flex-col items-center justify-center h-24 w-24 bg-zinc-100 rounded-full'>
            <p className='text-green-700'>付款確認</p>
          </div>
          <svg className="w-5 h-5 text-green-700 m-3 md:m-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <div className='flex flex-col items-center justify-center h-24 w-24 bg-zinc-100 rounded-full'>
            <p className='text-green-700'>完成訂單</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:items-start m-10 justify-center items-center'>
        <div>
            <div className='flex flex-col items-center w-[25rem] shadow-md'>
                <div className='flex items-center justify-center mb-3 mt-5'>
                    <p className='flex justify-center w-[22rem] text-green-700 text-lg font-bold border-b-[1px] border-green-700 pb-4'>訂單資訊</p>
                </div>
                <CartList items={cartItems} />
                <div className='flex items-center justify-between w-[22rem] mt-3 mb-5 border-t-[1px] border-green-700 pt-5'>
                    <p className='flex justify-between text-green-700 text-base'>小計</p>
                    <p className='flex justify-between text-green-700 text-base'>＄{calculateSubtotal()}</p>
                </div>
                <div className='flex items-center justify-between w-[22rem] mt-3 mb-5'>
                    <input className='bg-zinc-100 p-2 rounded-l-md w-3/4 focus:outline-1 focus: outline-green-700/50' type="text" id="coupon" name="coupon" placeholder="請輸入折扣碼" value={coupon} onChange={handleCouponChange}/>
                    <button className='px-5 py-2 flex justify-center w-1/4 bg-green-700 text-white rounded-r-md hover:bg-green-800' onClick={applyCoupon}>套用</button>
                </div>
                {showSuccess && (
                    <div className='flex justify-end items-end w-[85%] mt-[-8px]'>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 mr-1 text-green-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='text-sm text-green-700/90'>已套用折扣碼享88折</p>
                    </div>
                )}
                {showError && (
                    <div className='flex justify-end items-end w-[85%] mt-[-8px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 mr-1 text-red-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    <p className='text-sm text-red-700/90'>找不到該折扣碼</p>
                </div>
                )}
                <div className='flex items-center justify-between w-[22rem] mt-3 mb-5 border-t-[1px] border-green-700 pt-5'>
                    <p className='flex justify-between text-green-700 text-lg font-bold'>總計</p>
                    <p className='flex justify-between text-green-700 text-xl font-bold'>＄{total}</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-2/3 lg:w-1/3 lg:pt-0 pl-10 pt-10'>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='name'>收件人姓名</label>
                <input className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' type="text" id="name" name="name" placeholder="請輸入收件人姓名" value={orderInfo.name} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='phone'>收件人電話</label>
                <input className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' type="text" id="phone" name="phone" placeholder="請輸入收件人電話" value={orderInfo.phone} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='address'>收件人地址</label>
                <input className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' type="text" id="address" name="address" placeholder="請輸入收件人地址" value={orderInfo.address} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='email'>Email</label>
                <input className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' type="text" id="email" name="email" placeholder="請輸入收件人email" value={orderInfo.email} onChange={handleChange}></input>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='getDate'>取餐日期</label>
                <select className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' placeholder="請選擇取餐日期" id="getDate" name="getDate" value={orderInfo.getDate} onChange={handleChange}>
                {dates.map(date => (
                    <option key={date} value={date}>{date}</option>
                ))}
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='getTime'>取餐時間</label>
                <select className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' placeholder="請選擇取餐時間" id="getTime" name="getTime" value={orderInfo.getTime} onChange={handleChange}>
                    <option>07:00 am</option>
                    <option>08:00 am</option>
                    <option>09:00 am</option>
                    <option>10:00 am</option>
                    <option>11:00 am</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor='getPay'>付款方式</label>
                <select className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' placeholder="請選擇付款方式" id="getPay" name="getPay" value={orderInfo.getPay} onChange={handleChange}>
                    <option>Credit</option>
                    <option>ApplePay</option>
                    <option>ATM</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-green-700 mb-1' htmlFor="message">留言給我們</label>
                <textarea className='bg-zinc-100 p-2 rounded-sm focus:outline-1 focus: outline-green-700/50' id="message" rows="3" name="message" value={orderInfo.message} onChange={handleChange}></textarea>
            </div>
            <div className='flex justify-end'>
                <Link key='confirm' to='/confirm' className='px-5 py-2 mt-3 flex justify-center w-24 bg-green-700 text-white rounded-md hover:bg-green-800'>下一步</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;