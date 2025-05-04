'use client';

import React from "react";
import LinkItem from "@/app/Components/Header/LinkItem";

const Navigation: React.FC = () => {
    return (
        <div>
            <ul className="flex gap-4 text-lg">
                <LinkItem location="/categoria/cabeca" text="Cabeça"/>
                <LinkItem location="/categoria/torso" text="Torso"/>
                <LinkItem location="/categoria/pernas" text="Pernas"/>
                <LinkItem location="/categorias/pes" text="Pés"/>
                <LinkItem location="/" text="Home"/>
            </ul>
        </div>
    );
};

export default Navigation;