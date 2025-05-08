import React from "react";

const Certificates: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center lg:w-[500px] text-white">
            <h4>Certificados</h4>

            <div className="flex gap-2 mt-2">
                <a href="#"><img src="img/certs/google-transparency-report.webp"
                                 alt="Google transparency report certification" className="w-18 h-18"/></a>
                <a href="#"><img src="img/certs/loja-protegida.webp" alt="Loja Protegida certification"
                                 className="w-18 h-18"/></a>
                <a href="#"><img src="img/certs/reclame-aqui.avif" alt="Reclame aqui certification"
                                 className="w-18 h-18"/></a>
            </div>

            <div className="flex gap-2">
                <a href="#"><img src="img/certs/abvtex.avif" alt="Abvtex certification" className="w-18 h-18"/></a>
                <a href="#"><img src="img/certs/eu-reciclo.avif" alt="Eu Reclico certification" className="w-18 h-18"/></a>
            </div>   000111100111110000000
        </div>
    );
};

export default Certificates;