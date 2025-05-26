import React, {useMemo} from "react";
import {Button} from "@/components/ui/button";

type LinkItemProps = {
    location: string;
    text: string;
};

const LinkItem: React.FC<LinkItemProps> = ({location, text}: LinkItemProps) => {
    const isActive: boolean = useMemo(() => {
        const href: string = window.location.href;
        const locations: string[] = href.split("/");

        if (locations.length === 5) {
            const linkedPath: string = `/${locations[3]}/${locations[4]}`;
            if (linkedPath === location) {
                return true;
            }
        }

        return false;
    }, [location]);

    return (
        <li>
            <a href={location}>
                <Button variant="link" className={`font-normal text-md ${isActive && 'underline'}`}>
                    {text}
                </Button>
            </a>
        </li>
    );
};

export default LinkItem;