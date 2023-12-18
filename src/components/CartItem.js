import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const totalPrice = item.price * item.quantity;

    return (
      <div className="flex flex-row items-center justify-center w-full lg:w-[50rem] my-3">
        <div className="w-[11rem] flex justify-center"><img src={item.image_path} alt={item.name} className="w-28 h-20 object-cover rounded-md" /></div>
        <div className="w-[15rem] flex justify-start pl-2 text-sm sm:text-[17px] text-stone-600">{item.name}</div>
        <div className="flex items-center w-[10rem]">
            <button className='h-9 w-9 border-[1.5px] border-green-700 rounded-sm text-green-700 text-lg hover:bg-green-700 hover:text-white' onClick={() => decrementQuantity(item.id)}>-</button>
            <div className='flex justify-center items-center text-stone-600 h-9 w-10 md:w-20 border-y-2 border-zinc-100'>{item.quantity}</div>
            <button className='h-9 w-9 border-[1.5px] border-green-700 rounded-sm text-green-700 text-lg hover:bg-green-700 hover:text-white' onClick={() => incrementQuantity(item.id)}>+</button>
        </div>
        <span className="flex justify-start pl-10 text-sm sm:text-lg text-stone-600 w-[9rem]">{`$ ${totalPrice}`}</span>
        <button className="text-stone-600 hover:text-red-500 w-[5rem] pl-3" onClick={() => removeFromCart(item.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
      </div>
    );
  };

export default CartItem;