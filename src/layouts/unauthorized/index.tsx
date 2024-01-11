//import Logo from './../../assets/Logo.svg';
import Logo from './../../assets/Мой-каDS САМООБСЛУЖИВАНИЯ ENG версия 3 копия 1.png';

export default function UnAuthLayout ({ children } : { children: React.ReactNode }) {
    return (
        <div className=' h-screen w-screen absolute top-0'>
            <header className=' pt-4 pl-2 w-full h-fit flex sm:justify-center md:justify-start mb-5'>
                <img src={Logo} alt="logo" className=' sm:w-72' />
            </header>
            <main className=' px-6 h-auto w-full'>
                { children }
            </main>
{/*             <footer className=' h-fit mt-5 text-black'>
                © All rights reserved.
            </footer> */}
        </div>
    )
}