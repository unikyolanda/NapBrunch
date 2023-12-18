import React, { useState, useEffect } from 'react';
import banner from '../pic/banner.jpg';
import Card from '../components/Card';
import { useNavigation } from '../context/Navigation';
import { useCart } from '../context/CartContext';
import { useFavorite } from '../context/Favorite';

function ProductPage() {
    const { addToCart, cartItems } = useCart();
    const { currentPath } = useNavigation();
    const [product, setProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToFavorite, removeFromFavorite, isFavorited } = useFavorite();
    
    useEffect(() => {
        const pathParts = currentPath.split('/');
        const productId = Number(pathParts[pathParts.length - 1]);
        async function fetchProductData() {
            try {
                const response = await fetch('http://localhost:3001/food'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const currentProduct = data.find(p => p.id === productId);
                setProduct(currentProduct);

                const relatedProducts = data.filter(p => 
                    p.category === currentProduct.category && p.id !== productId
                ).slice(0, 3);
                setSelectedCategory(relatedProducts);

                const currentProductInCart = cartItems.find(p => p.id === productId);
                const productQuantityInCart = currentProductInCart ? currentProductInCart.quantity : 1;
                setProduct({ ...currentProduct, quantity: productQuantityInCart });
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [currentPath, cartItems]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const handleDecrement = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
    }
    const handleAddToCart = () => {
        const productToAdd = { ...product, quantity: quantity }; 
        addToCart(productToAdd); 
    }

    if(!product) {
        return<div>Loading...</div>
    }

    const favorited = product && isFavorited(product.id);
    const handleToggleFavorite = () => {
        if (product) {
            if (favorited) {
                removeFromFavorite(product.id);
            } else {
                addToFavorite(product);
            }
        }
    };


    return(
        <div>
            <div className='relative w-full h-[32rem] overflow-hidden'>
                <img className='flex object-cover h-full w-full items-center' alt="banner" src={banner} />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
                <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
                    <p className='mt-3 text-white text-xl md:text-[27px]'>餐點介紹</p>
                    <p className='mt-1 text-white'>Menu</p>
                </div>
            </div>
            <div className='relative flex m-20 mb-0 justify-center'>
                <div className='flex flex-col' key={product.id}>
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <img className='h-[22rem] w-[34rem] object-cover drop-shadow-md overflow-hidden rounded-sm' alt={product.name} src={product.image_path} />
                        <div className='flex flex-col m-7'>
                            <div className='flex flex-row'>
                                <p className='flex pb-3 font-bold pt-2 text-green-800 text-4xl'>{product.name}</p>
                                <button className='ml-5 mb-2 text-stone-600' onClick={handleToggleFavorite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={favorited ? 'rgb(248,113,113)' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={favorited ? 'rgb(248,113,113)' : 'currentColor'} className="w-7 h-7 mr-1 hover:text-red-400 hover:fill-[rgb(248,113,113)]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                            </div>
                            <p className='flex w-[32rem] my-2 text-stone-600'>{product.depiction}</p>
                            <p className='flex mt-6 text-stone-600'>{product.bonus}</p>
                            <p className='flex mt-6 font-bold text-red-500 text-xl'>優惠價 {product.price} 元</p>
                            <div className='mt-6 flex flew-row'>
                                <button className='h-10 w-10 border-2 border-green-700 rounded-sm text-green-700 text-lg hover:bg-green-700 hover:text-white' onClick={handleDecrement}>-</button>
                                <div className='flex justify-center items-center text-stone-600 h-10 w-32 border-y-2 border-zinc-100'>{quantity}</div>
                                <button className='h-10 w-10 border-2 border-green-700 rounded-sm text-green-700 text-lg hover:bg-green-700 hover:text-white' onClick={handleIncrement}>+</button>
                                <button 
                                    className='flex flex-row items-center ml-3 px-3 text-green-800 rounded-md hover:bg-green-700 hover:text-white' 
                                    onClick={handleAddToCart}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-12'>
                        {(product.ingredients1) && (<p className='flex my-5 font-bold text-green-800 text-3xl'>嚴選食材</p>)}
                        {(product.ingredients1 || product.ingredients2 || product.ingredients3) && (
                            <div className='flex flex-row' key={product.id}>
                                {product.ingredients1 && <img className='w-[20rem] h-[20rem] rounded-md mx-2 object-cover' alt='ingredient1' src={product.ingredients1} />}
                                {product.ingredients2 && <img className='w-[20rem] h-[20rem] rounded-md mx-2 object-cover' alt='ingredient2' src={product.ingredients2} />}
                                {product.ingredients3 && <img className='w-[20rem] h-[20rem] rounded-md mx-2 object-cover' alt='ingredient3' src={product.ingredients3} />}
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col items-center mt-12 mb-10'>
                        <p className='flex my-5 font-bold text-green-800 text-3xl'>訂購須知</p>
                        <div className='flex flex-col'>
                            <p className='flex w-[40rem] my-2 text-stone-600'>
                                ✧ 本店餐點均為當日新鮮製作，並採用當日配送的新鮮食材。收到後請務必於當天享用；若無法當天食用完畢，請妥善冷藏保存。
                            </p>
                            <p className='flex w-[40rem] my-2 text-stone-600'>
                                ✧ 訂單經確認付款後，將於您指定的日期當天配送至所填寫的地址。
                            </p>
                            <p className='flex w-[40rem] my-2 text-stone-600'>
                                ✧ Nap Brunch 對品質有著極高的要求。若您發現收到的商品包裝有任何損壞，請立即拍照留證並與我們聯絡，我們將迅速為您處理。客服專線：0800-010-101。
                            </p>
                            <p className='flex w-[40rem] my-2 text-stone-600'>
                                ✧ 請注意：一旦付款完成，Nap Brunch 不會透過電話要求您進行ATM操作或更改款項，也不會詢問您的信用卡資訊。如接到任何可疑電話，請撥打165反詐騙專線進行查證，保障您的權益。
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-12 pb-12 w-screen bg-neutral-100'>
                        <p className='flex pt-10 mb-7 font-bold border-b-2 border-green-800 pb-3 text-green-800 text-3xl'>同系列餐點</p>
                        <div className='flex flex-col justify-center items-center space-y-3 md:space-y-0 md:flex-row md:space-x-4'>
                        {selectedCategory.map(product => (<Card key={product.id} product={product} />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;