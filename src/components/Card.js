import Link from '../components/Link';
import { useCart } from '../context/CartContext';
import { useFavorite } from '../context/Favorite';

function Card({ product }) {
    const { addToCart } = useCart();
    const { addToFavorite, removeFromFavorite, isFavorited } = useFavorite();

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    }

    const favorited = isFavorited(product.id);

    const handleToggleFavorite = () => {
        if (favorited) {
            removeFromFavorite(product.id);
        } else {
            addToFavorite(product);
        }
    };

    return(
        <div className='relative w-auto xl:w-[23rem] drop-shadow-sm'>
            <Link to={`/product/${product.id}`} >
                <div className='h-[16rem] w-[22rem] overflow-hidden rounded-sm cursor-pointer'>
                    <img className="h-full w-full object-cover hover:opacity-70 duration-300" src={product.image_path} alt={product.name} />
                </div>
            </Link>
            <div className='flex justify-between mt-4'>
                <Link to={`/product/${product.id}`} >
                    <div>
                        <h3 className='text-base text-stone-700 font-bold'>{product.name}</h3>
                        <p className='mt-1 text-base font-bold text-green-800'>${product.price}</p>
                    </div>
                </Link>
                <div className="flex mx-2">
                    <button className='mx-3 text-gray-500 hover:text-red-400' onClick={handleToggleFavorite}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={favorited ? 'rgb(248,113,113)' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={favorited ? 'rgb(248,113,113)' : 'currentColor'} className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    <button className='text-sm text-gray-500 hover:text-green-800' onClick={handleAddToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;