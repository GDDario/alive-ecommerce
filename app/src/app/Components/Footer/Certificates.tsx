import React from "react";
import Image from "next/image";

const Certificates: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 justify-start lg:w-[333px] text-white">
            <h4>Certificados</h4>

                <div className="flex gap-2 mt-2">
                    <a href="#"><Image src="/img/certs/google-transparency-report.webp"
                                       alt="Google transparency report certification" width={70} height={70}/></a>
                    <a href="#"><Image src="/img/certs/loja-protegida.webp" alt="Loja Protegida certification"
                                       width={70} height={70}/></a>
                    <a href="#"><Image src="/img/certs/reclame-aqui.avif" alt="Reclame aqui certification"
                                       width={70} height={70}/></a>
                </div>

                <div className="flex gap-2">
                    <a href="#"><Image src="/img/certs/abvtex.avif" alt="Abvtex certification" width={70} height={70}/></a>
                    <a href="#"><Image src="/img/certs/eu-reciclo.avif" alt="Eu Reclico certification" width={70}
                                       height={70}/></a>
                </div>
        </div>
    );
};

export default Certificates;