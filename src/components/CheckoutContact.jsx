import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
const CheckoutContact = () => {
  const {cart,total} = useContext(CartContext)
  console.log(cart)
  const cartItems = `${cart.map((item,index)=>`
  Produit ${index+1} : ${item.name} , Price : ${item.price} , Amount : ${item.amount} |
  `)}`
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_alw2bdj', 'template_22vqklb', form.current, 'wBPtSopVRqmmnpaTC')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent Successfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 md:w-[70%] w-full'>
      <div className='flex flex-col gap-6 md:w-[80%] w-full'>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Name</label>
        <input name='client_name' type="text" className='py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Name' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Email</label>
        <input name='client_email' type="email" className='py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Email' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Phone Number</label>
        <input name='client_phone' type="number" className='py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Phone Number' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Your Adresse</label>
        <textarea name='client_adresse' rows={8} type="text" className='py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Adresse' />
      </div>
      <div className='flex flex-col gap-4'>
        <input value={cartItems} type='text' name='cart' className='hidden py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Phone Number' />
        <input value={total} name='total_price' type='number' className='hidden py-2 px-4 rounded-lg text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Your Phone Number' />
      </div>
      </div>
      <button onClick={sendEmail.toString()} className='text-center py-2 px-4 bg-[#11334f] text-xl rounded-lg hover:opacity-80 transition-all text-white w-fit'>Submit Request</button>
    </form>
  )
}

export default CheckoutContact