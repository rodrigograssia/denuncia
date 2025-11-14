import React from 'react';
import Topbar from '../components/TopBar';
import LinksFooter from '../components/LinksFooter';

function MinhasDenuncias() {
    return (
        <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
            <header><Topbar/></header>

            <div className="flex-grow flex flex-col items-center pt-10">
                <h1 className="dark:text-white font-bold text-xl sm:text-3xl text-center">Minhas Denúncias</h1>
                <footer className="w-full bg-[#eeeeee] dark:bg-neutral-900 py-4 px-4 md:py-5 md:px-8 mt-auto">
                    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
                        <LinksFooter />
                    <p className="text-black dark:text-white text-xs sm:text-sm md:text-base text-center md:text-right leading-tight">© 2025 denunc.ia – Todos os direitos reservados</p>
                </div>
                </footer>
            </div>
        </div>
    );
}
export default MinhasDenuncias;