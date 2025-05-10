import React from "react";
import SideMenu from "@/app/Components/SideMenu/SideMenu";
import {FilterProvider} from "@/app/context/FilterContext";

type CategoryLayoutProps = {
    children: React.ReactNode;
};

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
    children,
}: CategoryLayoutProps) => {
    return (
        <FilterProvider>
            <div className="flex gap-8 relative">
                <SideMenu/>

                {children}
            </div>
        </FilterProvider>
    );
};

export default CategoryLayout;