import React from "react";
import {TiUserOutline} from "react-icons/ti";
import {Button} from "@/components/ui/button";

const Navigation: React.FC = () => {
    return (
        <div>
            <ul className="flex gap-4 text-lg">
                <li>
                    <a href="/">
                        <Button variant="link" className="cursor-pointer text-md">
                            Home
                        </Button>
                    </a>
                </li>
                <li>
                    <a href="/categoria/cabeca">
                        <Button variant="link" className="cursor-pointer text-md">
                            Cabeça
                        </Button>
                    </a>
                </li>
                <li>
                    <a href="/categoria/torso">
                        <Button variant="link" className="cursor-pointer text-md">
                            Torso
                        </Button>
                    </a>
                </li>
                <li>
                    <a href="/categoria/pernas">
                        <Button variant="link" className="cursor-pointer text-md">
                            Pernas
                        </Button>
                    </a>
                </li>
                <li>
                    <a href="/categorias/pes">
                        <Button variant="link" className="cursor-pointer text-md">
                            Pés
                        </Button>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;