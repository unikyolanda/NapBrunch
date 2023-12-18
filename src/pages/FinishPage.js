import { useOrder } from "../context/OrderContext";
import { useCart } from "../context/CartContext";
import CartList from "../components/CartList";
import Link from "../components/Link";
import banner2 from '../pic/banner3.jpg';

function FinishPage() {
  const { orderInfo } = useOrder();
  const { cartItems, total } = useCart();

  return (
    <div>
        <div className='relative w-full h-[32rem] overflow-hidden'>
          <img className='flex object-cover h-full w-full items-center' alt="banner" src={banner2} />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
          <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
              <p className='mt-3 text-white text-lg md:text-[27px]'>購物車</p>
              <p className='mt-1 text-white'>Cart</p>
          </div>
        </div>
        <div className='relative flex mt-20 mb-10 justify-center'>
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
                <div className='flex flex-col items-center justify-center h-24 w-24 bg-green-700 rounded-full'>
                    <p className='bg-green-700 text-white'>付款確認</p>
                </div>
                <svg className="w-5 h-5 text-green-700 m-3 md:m-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                <div className='flex flex-col items-center justify-center h-24 w-24 bg-green-700 rounded-full'>
                    <p className='bg-green-700 text-white'>完成訂單</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="px-10 py-3 mb-10 text-xl bg-red-700/70 text-white rounded-md">感謝您的訂購，敬請留意取餐日期時間！</div>
            <div className='flex flex-col items-center w-[30rem] shadow-md mb-10'>
                <div className='flex items-center justify-center mb-3 mt-5'>
                    <p className='flex justify-center w-[26rem] text-green-700 text-xl font-bold border-b-[1px] border-green-700 pb-4'>訂單資訊</p>
                </div>
                <CartList items={cartItems} />
                <div className='flex items-center justify-between w-[26rem] mt-3 mb-5 border-t-[1px] border-green-700 pt-5'>
                    <p className='flex justify-between text-green-700 text-lg font-bold'>總計</p>
                    <p className='flex justify-between text-green-700 text-xl font-bold'>＄{total}</p>
                </div>
            </div>
            <div className='flex flex-col w-[30rem] bg-zinc-100 mb-16 p-5'>
                <div className="flex justify-center text-green-700 text-xl font-bold border-b-[1px] border-green-700 pb-4 mb-4">訂購資訊</div>
                <div className="flex flex-row justify-between text-stone-700 p-2 font-bold text-base">
                    <p>取餐日期及時間</p>
                    <p>{orderInfo.getDate} {orderInfo.getTime}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>收件人姓名</p>
                    <p>{orderInfo.name}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>收件人電話</p>
                    <p>{orderInfo.phone}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>收件人地址</p>
                    <p>{orderInfo.address}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>Email</p>
                    <p>{orderInfo.email}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>付款方式</p>
                    <p>{orderInfo.getPay}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>留言</p>
                    <p>{orderInfo.message}</p>
                </div>
                <div className="flex flex-row justify-between text-stone-700 p-2">
                    <p>付款狀態</p>
                    <p className="text-red-500 font-bold">付款成功</p>
                </div>
                <Link key='menu' to='/menu' className='flex justify-center px-5 py-2 mt-3 bg-green-700 text-white rounded-md hover:bg-green-800'>繼續選購</Link>
            </div>
        </div>
    </div>
  );
}

export default FinishPage;