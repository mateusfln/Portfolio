import React from 'react'
import curriculoPagina1 from '../../../public//images/curriculoImg.png'
import curriculoPagina2 from '../../../public//images/curriculoImg2.png'
import curriculoPagina3 from '../../../public//images/curriculoImg3.png'
import curriculopdf from '../../../public//images/curriculo.pdf'


function BaixarCV() {
  return (
    <div className=' bg-[#F4EFE9] py-10 px-10 rounded-lg shadow-2xl'>
    <div className='flex flex-col gap-10 mt-5'>
    <label className='font-bold text-2xl text-center' >Gostaria de obter meu currículo?</label>

      <div className='overflow-y-scroll h-96'>
        <img src={curriculoPagina1} alt="imagem do curriculo" className='shadow-xl' />
        <img src={curriculoPagina2} alt="imagem do curriculo" className='shadow-xl' />
        <img src={curriculoPagina3} alt="imagem do curriculo" className='shadow-xl' />
      </div>
            <a className='py-10 px-20 rounded-md shadow-[#858484] shadow-lg bg-slate-200 h-24 text-center' href={curriculopdf} download>Baixar CV</a>
     
    </div>
    </div>
    
  )
}

export default BaixarCV