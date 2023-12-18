import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../index.css';
import ScrollDiv from '../components/ScrollDiv';
import Link from "../components/Link";
import banner from '../pic/banner.jpg';
import burgar from '../pic/a4.jpg';
import bf from '../pic/bf.jpg';
import bf4 from '../pic/bf4.jpg';
import Card from '../components/Card';
import arrow from '../pic/arrow-green.svg';
import poem from '../pic/poem.jpg';
import ErrorBoundary from '../components/ErrorBoundary';

function FrontPage() {
    const [products, setProducts] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        async function fetchProductData() {
        try {
            const response = await fetch(process.env.PUBLIC_URL + '/db.json'); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
            setIsDataLoaded(true);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
        };

        fetchProductData();
    }, []);

    const selectedProducts = products.slice(0, 7);
    const renderSwiper = isDataLoaded && (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {selectedProducts.map(product => (
                <SwiperSlide key={product.id}>
                    <Card product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );

    const discountCode = "NAPBRUNCH666";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(discountCode)
            .then(() => {
                console.log("已複製");
            })
            .catch(err => {
                console.error('無法複製： ', err);
            });
    };

    const tooltipAnimation = useSpring({
        opacity: showTooltip ? 1 : 0,
        transform: showTooltip ? `translateY(0) translateX(-50%)` : `translateY(-20px) translateX(-50%)`,
        config: { tension: 250, friction: 20 }
    });

    const [displayFirst, setDisplayFirst] = useState(true);
    const toggleDisplay = () => {
        setDisplayFirst(false);
        setFading({ opacity: 0 });

        setTimeout(() => {
            setDisplayFirst(true);
            setFading({ opacity: 1 });
        }, 1800);
    };
    const [fading, setFading] = useSpring(() => ({
        opacity: 1,
        reset: true
    }));

    return(
        <div> 
            <div className='w-full h-screen overflow-hidden relative'>
                <img className='flex items-center object-cover w-full h-full' alt="banner" src={banner} />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
                <div className='animate-bannerUp absolute bg-neutral-800 bg-opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 md:px-20 py-8 rounded-lg flex flex-col items-center justify-center space-y-4'>
                    <p className='mt-5 font-bold text-white text-xl md:text-2xl lg:text-3xl'>啟動您的活力早晨！</p>
                    <p className='text-white text-sm md:text-base '>時尚與健康的完美結合，自然的美味在這裡重生。</p>
                    <Link key='menu' to='/menu' className='bg-green-700 text-white py-2 px-4 rounded-lg hover:opacity-90'>訂餐去</Link>
                </div>
                <img className='absolute w-10 left-1/2 transform -translate-x-1/2 bottom-16 animate-arrow' alt='arrow' src={arrow}/>
            </div>
            <div className='flex flex-col items-center justify-center mx-auto my-20'>
                <p className='flex justify-center w-64 px-5 mb-7 pb-3 font-bold border-b-2 border-green-800 pt-2 text-green-800 text-3xl'>新品上市</p>
                <ScrollDiv threshold={200} content={
                    <div className='flex flex-col justify-center items-center mx-8 lg:flex-row lg:mx-28'>
                        <div className='flex flex-col w-[80%] lg:w-1/3'>
                            <div className='overflow-hidden'><img className='w-full lg:w-88 h-72 object-cover hover:scale-110 duration-700' alt='burgar' src={burgar} /></div>
                            <div className='flex flex-col text-center bg-zinc-50 items-center justify-center h-72'>
                                <p className='mt-5 font-bold text-green-800 text-lg lg:text-2xl'>熔岩起司牛肉堡</p>
                                <p className='mt-3 text-green-800 text-sm'>三明治漢堡系列</p>
                                <p className='mt-3 mx-8 text-green-800 text-xs md:text-base'>嚴選進口澳洲牛肉手打肉保留原汁，搭配爆漿巧達起司，喚醒您早起仍慵懶的味覺。</p>
                                <Link key='product' to='/product/5' className='bg-green-800 text-white text-sm my-5 py-2 px-6 rounded-lg hover:opacity-90'>查看更多</Link>
                            </div>
                        </div>
                        <div className='flex flex-col w-[80%] lg:w-1/3 lg:flex-col-reverse'>
                            <div className='overflow-hidden'><img className='w-full lg:w-88 h-72 object-cover hover:scale-110 duration-700' alt='burgar' src={bf} /></div>
                            <div className='flex flex-col text-center bg-zinc-50 items-center justify-center h-72'>
                                <p className='mt-5 font-bold text-green-800 text-lg lg:text-2xl'>酪梨太陽蛋土司</p>
                                <p className='mt-3 text-green-800 text-sm'>早午餐鬆餅系列</p>
                                <p className='mt-3 mx-8 text-green-800 text-xs md:text-base'>使用熟度完美的酪梨，搭配丹麥土司及及焦脆太陽蛋，給您最簡單幸福的饗宴。</p>
                                <Link key='product' to='/product/4' className='bg-green-800 text-white text-sm my-5 py-2 px-6 rounded-lg hover:opacity-90'>查看更多</Link>
                            </div>
                        </div>
                        <div className='flex flex-col w-[80%] lg:w-1/3'>
                            <div className='overflow-hidden'><img className='w-full lg:w-88 h-72 object-cover hover:scale-110 duration-700' alt='burgar' src={bf4} /></div>
                            <div className='flex flex-col text-center bg-zinc-50 items-center justify-center h-72'>
                                <p className='mt-5 font-bold text-green-800 text-lg lg:text-2xl'>香蕉燕麥優格</p>
                                <p className='mt-3 text-green-800 text-sm'>沙拉優格系列</p>
                                <p className='mt-3 mx-8 text-green-800 text-xs md:text-base'>營養新鮮的當季水果，搭配多種穀物及希臘優格，清爽無負擔的早晨。</p>
                                <Link key='product' to='/product/6' className='bg-green-800 text-white text-sm my-5 py-2 px-6 rounded-lg hover:opacity-90'>查看更多</Link>
                            </div>
                        </div>
                    </div>}
                />
            </div>
            <div className="relative bg-cover bg-center bg-fixed bg-bf">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/40 to-zinc-300/40"></div>
                <div className='h-96 text-center flex'>
                    <ScrollDiv threshold={1000} content={
                        <div className='m-auto'>
                            <p className='text-3xl md:text-4xl font-bold text-white drop-shadow'>新開幕限時特價！不要錯過囉～</p>
                            <button className='relative z-10 bg-green-800 text-white text-lg my-5 py-2 px-6 rounded-lg hover:opacity-90' onClick={() => setShowTooltip(!showTooltip)}>點擊領取優惠Go</button>
                        </div>}
                    />
                </div>
                {showTooltip && (
                <animated.div style={tooltipAnimation} className="absolute bottom-3/4 left-1/2 p-5 border border-gray-300 bg-white rounded shadow-md">
                    <p className='text-stone-700 mb-4 mt-2'>結帳時使用折扣碼即可享有88折優惠</p>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='bg-zinc-100 p-2 pl-4 w-3/4 rounded-sm text-stone-700' id="coupon" name="coupon">{discountCode}</div>
                        {displayFirst ? (
                            <animated.button onClick={() => {toggleDisplay(); copyToClipboard();}}>
                            <svg style={fading} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-5 w-6 h-6 text-stone-700 hover:text-green-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                            </svg>
                            </animated.button>
                        ) : (
                            <animated.button>
                            <svg style={fading} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-5 w-6 h-6 text-green-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </animated.button>
                        )}
                        <button className='absolute top-[-0.5rem] right-[-0.5rem]' onClick={() => setShowTooltip(!showTooltip)}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-700 hover:text-green-800">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </animated.div>
            )}
            </div>
            <div className='bg-neutral-100 h-800 w-screen'>
                <div className='flex flex-col items-center justify-center mx-auto py-5'>
                    <h1 className='flex justify-center w-64 px-5 mt-12 pb-3 font-bold border-b-2 border-green-800 pt-2 text-green-800 text-3xl'>經典熱銷</h1>
                    <div className="container my-10">
                        <div className='flex flex-wrap justify-center ml-8'>
                            <ErrorBoundary>{renderSwiper}</ErrorBoundary>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col'>
                <img className='' alt='poem' src={poem}/>
                <ScrollDiv threshold={2000} content={
                    <div className="absolute flex flex-col justify-center inset-0 bg-gradient-to-r from-white/20 to-white/30">
                        <p className='relative flex pl-28 my-2 text-3xl font-bold text-stone-600 drop-shadow'>開啟清新美味「食」尚之旅</p>
                        <p className='relative flex pl-28 my-2 text-stone-600'>探索您的味蕾饗宴，只需一鍵訂餐！</p>
                        <Link key='menu' to='/menu' className='flex justify-center relative ml-28 bg-green-700 text-white py-2 mx-2 my-2 rounded-lg hover:opacity-90 w-32'>GO</Link>
                    </div>}
                />
            </div>
        </div>
    )
}

export default FrontPage;