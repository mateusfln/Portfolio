import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import whatsapp from '../../../public/images/whatsapp.png'

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
            <label className='font-bold text-2xl text-center' >Gostaria de entrar em contato?</label>
            <a href='https://wa.me/5548998100686' target='_blank' className='flex bg-[#40C351] p-2 rounded-xl items-center gap-2 px-10 scale-100 hover:scale-105 duration-300 shadow-lg'>
              <img className='h-10 items-center text-center' src={whatsapp} alt="logo whatsapp" />
              <label className='text-center rounded-lg cursor-pointer text-zinc-100'> envie uma mensagem via whatsapp</label>
            </a>
            <h1 className='items-center text-center'>ou entre em contato via email</h1>
            <input className='rounded-lg my-2 shadow-md border-none' type='email' name='user_email' placeholder='Digite seu email' />
            <textarea className='rounded-lg max-h-24 min-h-24 shadow-md border-none overflow-y-scroll resize-none' type="text" name='message' placeholder='Escreva aqui a sua mensagem!' />
            <input className='mx-20 mt-6 bg-blue-500 p-3 rounded-lg cursor-pointer scale-100 hover:scale-105 duration-300' type="submit" value="Enviar" />
        </div>
    </form>
  )
}

export default HowToReachMe