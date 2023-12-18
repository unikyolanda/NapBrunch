import React, { useState, useEffect } from 'react';
import banner from '../pic/banner.jpg';
import Card from '../components/Card';

function MenuPage() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        async function fetchProductData() {
        try {
            const response = await fetch(process.env.PUBLIC_URL + '/db.json'); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
        };

        fetchProductData();
    }, []);

    const filteredProducts = selectedCategory === 'all'
        ? products 
        : products.filter(product => product.category === selectedCategory);

    const getButtonClass = (category) => {
        return selectedCategory === category 
            ? 'bg-green-700/90 text-white text-base px-4 py-2 mx-3 my-1 rounded-3xl hover:bg-green-900' 
            : 'bg-green-800 text-white text-base px-4 py-2 mx-3 my-1 rounded-3xl hover:bg-green-900';
    };

    return(
        <div>
            <div className='relative w-full h-[32rem] overflow-hidden'>
                <img className='flex object-cover w-full h-full items-center' alt="banner" src={banner} />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
                <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
                    <p className='mt-3 text-white text-lg md:text-[27px]'>餐點選購</p>
                    <p className='mt-1 text-white'>Menu</p>
                </div>
            </div>
            
            <div className='container mx-auto my-20'>
                <div>
                    <button onClick={() => setSelectedCategory('all')} className={getButtonClass('all')}>全部餐點</button>
                    <button onClick={() => setSelectedCategory('hamburger')} className={getButtonClass('hamburger')}>漢堡吐司系列</button>
                    <button onClick={() => setSelectedCategory('pancake')} className={getButtonClass('pancake')}>早午餐鬆餅系列</button>
                    <button onClick={() => setSelectedCategory('yogurt')} className={getButtonClass('yogurt')}>水果優格系列</button>
                    <button onClick={() => setSelectedCategory('drink')} className={getButtonClass('drink')}>飲品系列</button>
                </div>
                <div>
                    <div className='container mt-10'>
                        <div className='flex flex-wrap justify-center mt-6 gap-x-3 gap-y-10 lg:gap-x-8'>
                            {filteredProducts.map((product, index) => (
                                <Card key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;