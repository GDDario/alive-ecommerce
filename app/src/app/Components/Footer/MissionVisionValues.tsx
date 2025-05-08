'use client';

import React from "react";

type ColumnProps = {
    title: string;
    body: string;
}

const Column: React.FC<ColumnProps> = ({title, body}: ColumnProps) => {
    return (
        <div className="flex flex-col gap-2 max-w-[200px]">
            <h4 className="font-bold">{title}</h4>

            <p>{body}</p>
        </div>
    );
};

const MissionVisionValues: React.FC = () => {
    return (
        <section className="flex flex-col gap-4 text-white">
            <h3 className="text-lg font-black">Missão, visão e valores <span className="text-sm font-thin">- nossa visão do mercado e do mundo</span></h3>

            <div className="flex gap-4 flex-wrap">
                <Column title="Missão" body="Oferecer uma experiência de compra online prática, segura e acessível, conectando clientes aos melhores produtos do mercado." />
                <Column title="Visão" body="Ser referência em inovação e excelência no comércio eletrônico, ampliando o acesso ao consumo digital em todo o país." />
                <Column title="Valores" body="Compromisso com o cliente, integridade nas relações, inovação contínua e responsabilidade socioambiental." />
            </div>
        </section>
    );
};

export default MissionVisionValues;