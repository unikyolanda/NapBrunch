const CartItem = ({ item }) => {
    const totalPrice = item.price * item.quantity;

    return (
      <div className="flex flex-row items-center justify-center w-[22rem] my-3">
        <div className="w-[22rem] flex justify-center items-center">
          <img src={item.image_path} alt={item.name} className="w-24 h-16 object-cover rounded-md" />
          <div className="flex flex-col justify-center items-start w-[13rem] ml-3 text-[16px] text-stone-600">
            <div>{item.name}</div>
            <div>{`$ ${totalPrice}`}</div>
          </div>
          <div className='flex justify-center items-center text-stone-600 h-9'>{item.quantity}份</div>
        </div>
      </div>
    );
  };

export default CartItem;