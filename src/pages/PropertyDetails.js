import React, { useState, useContext, useEffect } from 'react';
import { housesData } from '../data'; 
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';

const PropertyDetails = () => {
  const { cart, addToCart } = useContext(CartContext);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  
  const { id } = useParams();
  const house = housesData.find(house => house.id === parseInt(id));

  useEffect(() => {
    let timeout;
    if (feedbackMessage) {
      timeout = setTimeout(() => {
        setFeedbackMessage("");
      }, 5000); // 5 seconds delay
    }
    return () => clearTimeout(timeout); // Clear timeout if component unmounts
  }, [feedbackMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      houseId: house.id,
      name,
      email,
      bookingDate,
    };
    addToCart(newBooking);
    setFeedbackMessage("Your booking has been added to the cart.");
    // Optionally, clear the form fields after submission
    setName("");
    setEmail("");
    setBookingDate("");
  };

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2'>
            <div className='bg-green-500 text-white px-3 py-1 rounded-full'>{house.type}</div>
            <div className='bg-blue-500 text-white px-3 py-1 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-yellow-500'>$ {house.price}</div>
        </div>

        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[760px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt={house.name} className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex gap-x-6 text-red-500 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl'/>
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-green-300 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border-gray-300 rounded-full'>
                <img src={house.agent.image} alt={house.agent.name} />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='#' className='text-orange-700 text-sm'>Contact Agent</Link> 
              </div>
            </div>
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <input 
                className='border border-gray-800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm' 
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
              />
              <input 
                className='border border-gray-800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm' 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
              />
              <input 
                className='border border-gray-800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm' 
                type='date'  
                placeholder='Booking Date' 
                value={bookingDate} 
                onChange={e => setBookingDate(e.target.value)} 
                required 
              />
              <div className='flex'>
                <button 
                  className='bg-red-700 hover:bg-red-800 text-white rounded p-4 text-sm w-full transition' 
                  type="submit"
                >
                  BOOK NOW
                </button>
              </div>
            </form>
            {feedbackMessage && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
