import React from 'react';
import Carrossel from './Carrossel';

const SobreMim = () => {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen">
      {/* Div 1: Quem sou eu */}
      <div className="w-full md:w-1/3 p-8 bg-white shadow-lg rounded-md m-4 min-h-48">
        <h2 className="text-2xl font-semibold mb-4">Quem Sou Eu</h2>
        <p className="text-gray-700">
          Olá! Meu chamo Mateus, sou desenvolvedor Back-end PHP com experiência sólida em desenvolvimento e manutenção de ambientes usando Laravel e React.js.
        </p>
      </div>

      {/* Div 2: Objetivos Principais */}
      <div className="w-full md:w-1/3 p-8 bg-white shadow-lg rounded-md m-4 min-h-48">
        <h2 className="text-2xl font-semibold mb-4">Objetivos Principais</h2>
        <p className="text-gray-700">
          Busco atuar na área de tecnologia da informação, contribuindo com meu conhecimento em PHP e Javascript para projetos inovadores e desafiadores.
        </p>
      </div>

        <div className=''>
        <Carrossel/>
        </div>
      
      {/* Div 3: Tecnologias Utilizadas */}
      <div className="w-full md:w-1/3 p-8 bg-white shadow-lg rounded-md m-4 min-h-48">
        <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
        <p className="text-gray-700">
          Trabalho com tecnologias como Laravel, React.js, MQTT, WebSockets, Docker, Git, e Tailwind CSS, buscando sempre aprimorar minhas habilidades e ficar atualizado.
        </p>
      </div>
    </div>
  );
};

export default SobreMim;
