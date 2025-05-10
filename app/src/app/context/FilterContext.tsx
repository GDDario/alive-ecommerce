'use client';

import React, {createContext, ReactNode, useContext, useState} from "react";

export type FilterContextType = {
    filters: any[];
    setFilters: (filters: any[]) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export type FilterProviderProps = {
    children: ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({children}: FilterProviderProps) => {
    const [filters, setFilters] = useState<any[]>([]);

    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = (): FilterContextType => {
    const context = useContext(FilterContext);

    if (!context) throw new Error("useFilters needs to be used inside a FilterProvider.");

    return context;
};