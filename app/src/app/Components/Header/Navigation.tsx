'use client';

import React from "react";
import LinkItem from "@/app/Components/Header/LinkItem";

const Navigation: React.FC = () => {
    return (
        <div>
            <ul className="flex gap-4 text-lg">
                <LinkItem location="/" text="Home"/>
                <LinkItem location="/categoria/cabeca" text="Cabeça"/>
                <LinkItem location="/categoria/torso" text="Torso"/>
                <LinkItem location="/categoria/pernas" text="Pernas"/>
                <LinkItem location="/categoria/pes" text="Pés"/>
            </ul>
        </div>
    );
};

export default Navigation;