import React from 'react'

function NavBar() {
    return (


        <nav className='flex justify-between bg-[#3e3232] top-0 z-10 sticky bg-opacity-95'>
            <a href='#mateusfln' className='text-2xl items-center p-4 text-amber-50 hover:text-amber-100 scale-100 hover:scale-105 ease-in duration-300'>Mateus Nunes</a>
            

            <div className="flex justify-between items-center px-5">

                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                    <div className="relative flex justify-between h-16 items-center ">

                        {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">


                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div> */}
                        <div className="flex flex-1 justify-center sm:items-stretch sm:justify-center">
                            <div className="flex items-center">
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#mateusfln" className=" text-gray-300 hover:bg-[#4d3d3d] rounded-md hover:text-whiterounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150" aria-current="page">Home</a>
                                    <a href="#sobremim" className="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">Sobre Mim</a>
                                    <a href="#projetos" className="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">Projetos</a>
                                    <a href="#baixarcv" className="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">BaixarCV</a>
                                    <a href="#howtoreachme" className="text-gray-300 hover:bg-[#4d3d3d] hover:text-white rounded-md px-3 py-2 text-sm font-medium scale-100 hover:scale-105 ease-in duration-150">Contato</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className="relative ml-3">

                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <a href="#" className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white" aria-current="page">Home</a>
        <a href="#sobremim" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sobre mim</a>
        <a href="#projetos" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projetos</a>
        <a href="#baixarcv" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">BaixarCv</a>
        </div>
        </div> */}
            </div>

        </nav>


    )
}

export default NavBar