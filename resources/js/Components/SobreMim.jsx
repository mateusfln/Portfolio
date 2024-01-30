import React from 'react';
import Carrossel from './Carrossel';

const SobreMim = () => {

  const descricoes = [
    {title:'Quem Sou Eu',content:'Olá! Meu chamo Mateus, sou desenvolvedor Back-end PHP com experiência sólida em desenvolvimento e manutenção de ambientes usando Laravel e React.js.'},
    {title:'Objetivos Principais',content:'Busco atuar na área de tecnologia da informação, contribuindo com meu conhecimento em PHP e Javascript para projetos inovadores e desafiadores.'},
    {title:'Tecnologias Utilizadas',content:'Trabalho com tecnologias como Laravel, React.js, MQTT, WebSockets, Docker, Git, e Tailwind CSS, buscando sempre aprimorar minhas habilidades e ficar atualizado.'}
  ]

  const texto = descricoes.map((descricao)=>{
    return(
      <div className="w-full md:w-1/3 p-8 bg-white shadow-lg rounded-md m-4 min-h-48 scale-100 hover:scale-105 ease-in duration-150">
        <h2 className="text-2xl font-semibold mb-4">{descricao.title}</h2>
          <p className="text-gray-700">{descricao.content}</p>
      </div>

    )
        })

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className='flex flex-wrap justify-center'>
        {texto}
        
      </div>
      <Carrossel/>
      

      
    </div>
  );
};

export default SobreMim;
