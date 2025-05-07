'use client';

import React, {ReactNode} from "react";
import {TooltipProvider} from "@/components/ui/tooltip";

type NextTooltipProviderProps = {
    children?: ReactNode;
}

const NextTooltipProvider: React.FC<NextTooltipProviderProps> = ({children}: NextTooltipProviderProps) => {
    return (
        <TooltipProvider>
            {children}
        </TooltipProvider>
    );
};

export default TooltipProvider;