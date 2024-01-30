import React from 'react'
import curriculo from '../../../public//images/curriculo.pdf'

function BaixarCV() {
  return (
    
    <a className='py-10 px-20 rounded-md shadow-[#EBE3D5] animate-bounce shadow-2xl bg-slate-200' href={curriculo} download>Baixar CV</a>
  )
}

export default BaixarCV