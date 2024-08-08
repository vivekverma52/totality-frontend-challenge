import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { housesData } from '../data'; 
import { Link } from'react-router-dom';
const CartDisplay = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => {
    const house = housesData.find(h => h.id === item.houseId);
    return total + (house ? house.price : 0);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart Contents</h1>
      <div className="mb-6 text-xl font-semibold">
        Total Price: <span className="text-yellow-500">Rs{totalPrice.toFixed(2)}</span>
      </div>
      {/* Proceed to Payment Button */}
      <div className="mb-6">
       

        <Link className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition" to={`/payment`} >
        Proceed to Payment
              </Link>
      </div>
      {cart && cart.length > 0 ? (
        <ul className="space-y-6">
          {cart.map((item, index) => {
            const house = housesData.find(h => h.id === item.houseId);
            return (
              <li key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="lg:w-1/3">
                    <img className="rounded-lg w-full h-auto" src={house.imageLg} alt={house.name} />
                  </div>
                  <div className="lg:w-2/3 lg:pl-8 mt-4 lg:mt-0">
                    <h2 className="text-2xl font-semibold">{house.name}</h2>
                    <h3 className="text-lg text-gray-600 mb-4">{house.address}</h3>
                    <div className="mb-4 flex flex-wrap gap-x-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full">{house.type}</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full">{house.country}</span>
                    </div>
                    <div className="text-3xl font-semibold text-yellow-500 mb-4">Rs{house.price}</div>
                    <div className="mb-4">
                      <div className="text-gray-700 mb-2"><strong>Bedrooms:</strong> {house.bedrooms}</div>
                      <div className="text-gray-700 mb-2"><strong>Bathrooms:</strong> {house.bathrooms}</div>
                      <div className="text-gray-700 mb-2"><strong>Surface:</strong> {house.surface} sq ft</div>
                    </div>
                    <p className="text-gray-600">{house.description}</p>
                    <div className="mt-4">
                      <div className="text-gray-700"><strong>Booked by:</strong> {item.name}</div>
                      <div className="text-gray-700"><strong>Email:</strong> {item.email}</div>
                      <div className="text-gray-700"><strong>Booking Date:</strong> {item.bookingDate}</div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.houseId)} 
                      className="bg-red-500 text-white rounded px-4 py-2 mt-4 hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDisplay;
