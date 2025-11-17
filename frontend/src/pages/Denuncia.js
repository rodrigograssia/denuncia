import Topbar from "../components/TopBar";
import Botao from "../components/Botao";
import Footer from "../components/Footer";
import AreaDenuncia from "../components/AreaDenuncia";
import AreaTelefone from "../components/AreaTelefone";

function Denuncia() {
    return (
        <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
            <header><Topbar /></header>

            <main className="flex-1 flex flex-col pt-6 pb-20 px-4 md:pt-8 md:px-8 w-full items-center">
                <Botao variant="back" to="/">Voltar</Botao>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 justify-center items-center">
                        <div className="flex flex-col items-center text-center md:w-[400px] lg:w-[500px]">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10 text-gray-700 dark:text-gray-300 font-bold">Fazer uma denúncia</h2>
                            <AreaDenuncia/>
                        </div>
                        <div className="hidden md:block w-[2px] h-[700px] bg-neutral-400 mx-4 flex-shrink-0"></div>
                        <div className="block md:hidden w-full h-[2px] bg-neutral-400 my-6"></div>
                        <div className="flex flex-col items-center text-center md:w-[400px] lg:w-[500px]">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10 text-gray-700 dark:text-gray-300 font-bold">Verificar um telefone</h2>
                            <AreaTelefone/>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Denuncia;