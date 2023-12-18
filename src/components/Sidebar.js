import Link from "./Link";
import icon from "../pic/icon.svg";
import { useCart } from '../context/CartContext';
import { useFavorite } from "../context/Favorite";

function Sidebar() {
    const { cartItems } = useCart();
    const { favorites } = useFavorite();
    const links = [
        { label: '關於我們', path:'/about'},
        { label: '餐點選購', path:'/menu'},
        { label: '收藏清單', path:'/favorite'},
        { label: '購物車', path:'/cart'}
    ];

    const renderedLinks = links.map((link) => {
        return<Link
            key={link.label} 
            to={link.path} 
            className='relative mx-3 mt-3 text-white transition duration-300 hover:drop-shadow-white'
            activeClassName='font-bold border-white'
        >
            {link.label}
            {link.label === '收藏清單' && favorites.length > 0 && (
                <div className="absolute right-[-0.7rem] top-[-0.4rem] rounded-full w-[18px] h-[18px] bg-red-600/70 text-white flex justify-center items-center text-xs pl-[1px]">{favorites.length}</div>
            )}
            {link.label === '購物車' && cartItems.length > 0 && (
                <div className="absolute right-[-0.7rem] top-[-0.4rem] rounded-full w-[18px] h-[18px] bg-red-600/70 text-white flex justify-center items-center text-xs pl-[1px]">{cartItems.length}</div>
            )}
        </Link>;
    });

    return(
        <div className="flex justify-between p-3 pb-5">
            <div className="flex pl-4 text-2xl tracking-wider cursor-pointer transition duration-300 hover:drop-shadow-white">
                <img className="w-10 " alt='icon' src={icon}/>
                <Link key='NapBrunch' to='/' className='ml-2 mt-3 font-serif text-white'>NapBrunch</Link>
            </div>
            <div className="flex pr-4">{renderedLinks}</div>
        </div>
    );
}

export default Sidebar;