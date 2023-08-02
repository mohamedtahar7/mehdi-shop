import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../contexts/CartContext';
const CheckoutContact = ({sucessOrder,setSuccessOrder}) => {

  const alert = ()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre Commande a été envoyée',
      showConfirmButton: false,
      timer: 3000
    })
    
  }
  const {cart,total} = useContext(CartContext)
  const cartItems = `\n${cart.map((item,index)=>`
  Produit ${index+1} : ${item.name} , Price : ${item.price} DA , Quantity : ${item.amount} |
  `)}`
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_alw2bdj', 'template_22vqklb', form.current, 'wBPtSopVRqmmnpaTC')
      .then((result) => {
        alert()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (


    <form id='checkoutForm' ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 md:w-[70%] w-full'>
      <div className='flex flex-col gap-6 md:w-[80%] w-full'>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Nom</label>
        <input required name='client_name' type="text" className='py-2 px-4 text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Entrez Votre Nom' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>E-mail</label>
        <input required name='client_email' type="email" className='py-2 px-4 text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Entrez votre E-mail' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Numéro de Téléphone</label>
        <input required name='client_phone' type="number" className='py-2 px-4 text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Entrez votre Numéro' />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-[#11334f] text-xl font-medium'>Adresse</label>
        <textarea required name='client_adresse' rows={4} type="text" className='py-2 px-4 text-xl placeholder-gray-400 border focus:border-[2px] border-[#11334f]' placeholder='Entrez votre Adresse' />
      </div>
      <div className='flex flex-col gap-4'>
        <input defaultValue={cartItems} type='text' name='cart' className='hidden'/>
        <input defaultValue={total} name='total_price' type='number' className='hidden'/>
      </div>
      </div>
      <button type='submit' className='text-center py-2 px-4 bg-[#11334f] text-xl hover:opacity-80 transition-all text-white w-fit'>Commander</button>
    </form>
  )
}

export default CheckoutContact