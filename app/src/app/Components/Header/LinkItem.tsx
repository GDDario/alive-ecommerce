import React from "react";
import {Button} from "@/components/ui/button";

type LinkItemProps = {
    location: string;
    text: string;
};

const LinkItem: React.FC<LinkItemProps> = ({location, text}: LinkItemProps) => {
    return (
        <li>
            <a href={location}>
                <Button variant="link" className="font-normal text-md">
                    {text}
                </Button>
            </a>
        </li>
    );
};

export default LinkItem;