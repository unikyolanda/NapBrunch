import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();
export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        getDate: new Date().toISOString().split('T')[0],
        getTime: '07:00 am',
        getPay: 'credit',
        message: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setOrderInfo(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

return (
    <OrderContext.Provider value={{ handleChange, orderInfo }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderContext;