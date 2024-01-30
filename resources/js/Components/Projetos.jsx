import React from 'react'

import html from '../../../public/images/html.png'
import php from '../../../public/images/php.png'

import laravel from '../../../public/images/laravel.png'
import projeto from '../../../public/images/projeto.png'


function Projetos() {

    const projects =[
        {title: 'projeto 1', image: projeto, content: 'adicionar descrição.', stacks:[html,php,laravel]},
        {title: 'projeto 1', image: projeto, content: 'adicionar descrição.', stacks:[html,php,laravel]},

        
    ]

   const projetoslist = projects.map((project) =>{

     return <article className=' bg-zinc-100 py-10 px-10 rounded-lg shadow-2xl w-96 h-96 scale-100 hover:scale-105 ease-in duration-150'>
                <h1 className='text-2xl font-semibold mb-4'>{project.title}</h1>
                <img className='w-80 h-48 my-4' src={project.image} alt="imagem do projeto" />
                <p className='text-pretty text-center'>{project.content}</p> 
                <div className='flex flex-row gap-2'>
                {project.stacks.map((stack)=>
                    <img className='w-10 h-10 my-4 hover:grayscale rounded-lg p-1 scale-100 hover:scale-110 ease-in duration-150' src={stack} alt="stacks" />
                
                )} 
                </div>
            </article>
        }
    )

        
        

  return (
    <div className='flex flex-wrap items-center justify-center gap-20 p-16'>
            {projetoslist}
    </div>
  )
}

export default Projetos