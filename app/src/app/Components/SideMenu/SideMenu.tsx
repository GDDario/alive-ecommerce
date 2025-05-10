'use client';

import React, {useEffect} from "react";
import FiltersDictionary from "@/app/Components/SideMenu/FiltersDictionary";
import {useFilters} from "@/app/context/FilterContext";

const SideMenu: React.FC = () => {
    const {filters} = useFilters();

    useEffect(() => {
        console.log('Filters feitos', filters);
    }, [filters]);

    return (
        <aside className="h-[85vh] min-w-[300px] glassy-panel sticky top-[8%] left-0 px-4 py-2 flex flex-col gap-4">
            {
                // filters.map((filter: any) => FiltersDictionary[filter.type])
                filters.map((filter: any) => <div>Filtro</div>)
            }
        </aside>
    )
};

export default SideMenu;