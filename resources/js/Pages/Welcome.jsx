import NavBar from '@/Components/NavBar';
import { Link, Head } from '@inertiajs/react';
import ProfilePic from '../../../public/images/profile-pic.png'
import SobreMim from '@/Components/SobreMim';
import Projetos from '@/Components/Projetos';
import BaixarCV from '@/Components/BaixarCV';

export default function Welcome() {
    return (
        
        <div>
            <NavBar/>
            
            <div id='mateusfln' className="flex-col sm:flex sm:justify-center sm:items-center h-screen bg-center bg-[#F3EEEA]">
                    <img className='h-72' src={ProfilePic} alt="imagem de perfil" />
                    <h1 className='text-5xl font-bold'>Mateusfln</h1>
                    <h1 className='text-xl font-thin mt-4'>Back-end Developer</h1>                 
            </div>

            
            <div id='sobremim' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-[#EBE3D5] selection:bg-red-500 selection:text-white">
                    <SobreMim/>                
            </div>

            <div id='projetos' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-[#B0A695] selection:bg-red-500 selection:text-white">
                    <Projetos/>                
            </div>

            <div id='baixarcv' className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-[#776B5D] selection:bg-red-500 selection:text-white">
                    <BaixarCV/>                
            </div>
            

        </div>
    );
}
