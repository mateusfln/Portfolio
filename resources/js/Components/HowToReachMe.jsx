import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function HowToReachMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b41gdw4', 'template_97p8brh', form.current, '22bC8yagGBsgjMtqK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <form ref={form} onSubmit={sendEmail} className=' bg-[#F4EFE9] p-10 rounded-lg shadow-2xl'>
        <div className='flex flex-col gap-4'>
            <a className='font-bold text-2xl' >Gostaria de entrar em contato?</a>
            <a href='https://wa.me/5548998100686' target='_blank' className='text-center p-2 bg-green-300 rounded-lg cursor-pointer'> envie uma mensagem via whatsapp</a>
            <h1 className='items-center text-center'>ou entre em contato via email</h1>
            <input className='rounded-lg my-2' type='email' name='user_email' placeholder='Example@gmail.com' />
            <textarea className='rounded-lg max-h-24 min-h-24' type="text" name='message' />
            <input className='mx-20 mt-6 bg-blue-500 p-3 rounded-lg hover:bg-blue-400 cursor-pointer' type="submit" value="Enviar" />
        </div>
    </form>
  )
}

export default HowToReachMe