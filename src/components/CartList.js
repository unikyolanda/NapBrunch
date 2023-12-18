import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";

function CartList(){
    const { cartItems, viewType } = useCart();
  
    return (
      <div>
        {cartItems.map(item => (
          <div className='flex items-center justify-center' key={item.id}>
            {viewType === '/cart' ? <CartItem item={item} /> : <OrderItem item={item} />}
          </div>
        ))}
      </div>
    );
  };

export default CartList;