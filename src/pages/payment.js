import React, { useContext, useState } from 'react';
import CartContext from '../contexts/CartContext';
import { housesData } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Import checkmark icon

const Payment = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => {
    const house = housesData.find(h => h.id === item.houseId);
    return total + (house ? house.price : 0);
  }, 0);

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate and process payment here
    if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
      alert('Please fill in all the details');
      return;
    }

    
    setPaymentSuccess(true);

  
    clearCart();

    

   
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {paymentSuccess ? (
        <div className="flex flex-col items-center justify-center h-64">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <p className="text-2xl font-semibold">Payment Successful!</p>
          <p className="text-gray-600 mt-2">Redirecting to Home...</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
          
          <div className="mb-6 text-xl font-semibold">
            Total Price: <span className="text-yellow-500">${totalPrice.toFixed(2)}</span>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name on Card</label>
              <input
                type="text"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
            >
              Pay ${totalPrice.toFixed(2)}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
