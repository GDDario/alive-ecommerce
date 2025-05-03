'use client';

import React from "react";
import {Button} from "@/components/ui/button";
import styled from "styled-components";

const LinkButton = styled(Button)`
    font-size: 1.05rem;
    cursor: pointer;
    font-weight: normal;
`

const Navigation: React.FC = () => {
    return (
        <div>
            <ul className="flex gap-4 text-lg">
                <li>
                    <a href="/">
                        <LinkButton variant="link">
                            Home
                        </LinkButton>
                    </a>
                </li>
                <li>
                    <a href="/categoria/cabeca">
                        <LinkButton variant="link">
                            Cabeça
                        </LinkButton>
                    </a>
                </li>
                <li>
                    <a href="/categoria/torso">
                        <LinkButton variant="link">
                            Torso
                        </LinkButton>
                    </a>
                </li>
                <li>
                    <a href="/categoria/pernas">
                        <LinkButton variant="link">
                            Pernas
                        </LinkButton>
                    </a>
                </li>
                <li>
                    <a href="/categorias/pes">
                        <LinkButton variant="link">
                            Pés
                        </LinkButton>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;