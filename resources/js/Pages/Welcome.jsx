import NavBar from '@/Components/NavBar';
import { Link, Head } from '@inertiajs/react';
import ProfilePic from '../../../public/images/profile-pic.png'
import SobreMim from '@/Components/SobreMim';
import Projetos from '@/Components/Projetos';
import BaixarCV from '@/Components/BaixarCV';
import pattern from '../../../public/images/pattern.jpg'

export default function Welcome() {
    return (
        
        <div>
            <NavBar/>

            <div id='mateusfln' style={{backgroundImage: `url(${pattern})`}} className="flex-col sm:flex sm:justify-center sm:items-center h-1/2 bg-fixed bg-repeat p-10 ">
                    <img className='h-72 scale-100 hover:scale-105 ease-in duration-150' src={ProfilePic} alt="imagem de perfil" />
                    <h1 className='text-5xl font-bold text-amber-50 mt-4'>Mateusfln</h1>
                    <h1 className='text-xl font-thin mt-4 text-amber-50'>Back-end Developer</h1>                 
            </div>

            <div className='bg-gradient-to-b from-[#EBE3D5] to-orange-200'>

            <div id='sobremim' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center  selection:bg-red-500 selection:text-white">
                    <SobreMim/>                
            </div>

            <div id='projetos' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center  selection:bg-red-500 selection:text-white">
                    <Projetos/>                
            </div>

            <div id='baixarcv' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center selection:bg-red-500 selection:text-white">
                    <BaixarCV/>                
            </div>
            
            </div>
            
           

        </div>
    );
}
