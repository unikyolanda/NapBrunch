import React from 'react';
import CartList from '../components/CartList';
import banner2 from '../pic/banner3.jpg';
import { useCart } from '../context/CartContext';
import Link from '../components/Link';

function CartPage() {
  const { cartItems } = useCart();
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return(
    <div>
      <div className='relative w-full h-[32rem] overflow-hidden'>
          <img className='flex object-cover h-full w-full items-center' alt="banner" src={banner2} />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
          <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
              <p className='mt-3 text-white text-xl md:text-[27px]'>購物車</p>
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
          <div className='flex flex-col items-center justify-center h-24 w-24 bg-zinc-100 rounded-full'>
            <p className='text-green-700'>輸入資訊</p>
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
      <div className='flex m-10 justify-center'>
        <div className='flex flex-col w-[90%] lg:w-[50rem]'>
          <div className='flex flex-row items-center mb-4 justify-center text-base lg:text-lg font-bold text-green-700 border-b-[1px] pb-4 border-green-700'>
              <div className="flex justify-center w-[11rem]">商品圖片</div>
              <div className="flex justify-center w-[14rem]">商品名稱</div>
              <div className="flex justify-center w-[11rem]">數量</div>
              <div className="flex justify-center w-[9rem]">價格</div>
              <div className='flex justify-center md:mr-[2rem] w-[3rem]'>刪除</div>
          </div>
          {cartItems.length > 0
            ? (<CartList items={cartItems}/>)
            : (<p className='my-12 text-center font-bold text-lg text-green-700'>您的購物車是空的</p>
          )}
          
          <div className='flex flex-row items-center mt-5 mb-11 justify-between text-lg font-bold text-green-700 border-t-[1px] pt-6 border-green-700'>
          <Link key='menu' to='/menu' className='px-5 py-2 mr-3 text-green-700 rounded-md border-[1px] border-green-700 hover:bg-green-700 hover:text-white'>繼續購物</Link>
            <div className='flex flex-row justify-center items-center'>
              <p className='mr-5'>結帳金額 NT $ {calculateTotal()}</p>
              <Link key='order' to='/order' className='px-5 py-2 bg-green-700 text-white rounded-md hover:bg-green-800'>下一步</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;