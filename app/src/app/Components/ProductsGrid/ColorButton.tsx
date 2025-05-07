import React from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

type ColorButtonProps = {
    color: string;
    hex_color: string;
    selected: boolean;
    onSelect: () => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({color, hex_color, selected, onSelect}: ColorButtonProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div
                    role="button"
                    className={`
                        w-4 h-4 rounded-full ${selected ? 'ring-2 ring-card ring-yellow-200 shadow-md' : ''}
                        cursor-pointer
                    `}
                    style={{background: hex_color}}
                    onClick={onSelect}
                />
            </TooltipTrigger>
            <TooltipContent>
                <p>{color}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default ColorButton;