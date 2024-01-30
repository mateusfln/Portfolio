import React from 'react'

function NavBar() {
  return (
        <nav class="bg-[#3E3232] sticky top-0 z-50 flex items-center px-5">
            <a href='#mateusfln' className='text-2xl text-amber-50 hover:text-amber-100 scale-100 hover:scale-105 ease-in duration-300'>Mateus Nunes</a>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            
        <div class="relative flex h-16 items-center justify-between ">
            
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

            
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div class="flex flex-shrink-0 items-center">
            </div>
            <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
                <a href="#mateusfln" class=" text-gray-300 hover:bg-[#4d3d3d] rounded-md hover:text-whiterounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150" aria-current="page">Home</a>
                <a href="#sobremim" class="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">Sobre Mim</a>
                <a href="#projetos" class="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">Projetos</a>
                <a href="#baixarcv" class="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">BaixarCV</a>
            </div>
            </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div class="relative ml-3">

            </div>
        </div>
        </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
        <a href="#" class="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white" aria-current="page">Home</a>
        <a href="#sobremim" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sobre mim</a>
        <a href="#projetos" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projetos</a>
        <a href="#baixarcv" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">BaixarCv</a>
        </div>
    </div>
    </nav>

  )
}

export default NavBar