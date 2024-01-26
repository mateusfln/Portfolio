import React from 'react'
import curriculo from '../../../public//images/curriculo.pdf'

function BaixarCV() {
  return (
    
    <a className='py-10 px-20 rounded-2xl bg-slate-200' href={curriculo} download>Baixar CV</a>
  )
}

export default BaixarCV