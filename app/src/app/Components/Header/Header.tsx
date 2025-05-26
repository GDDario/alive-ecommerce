import React from "react";
import Navigation from "@/app/Components/Header/Navigation";
import HeaderOptions from "@/app/Components/Header/HeaderOptions";

const Header: React.FC = () => {
    return (
        <nav
            className="w-full lg:h-[60px] py-5 px-20 flex justify-between items-center gap-12 glassy-panel
             fixed top-0 left-0 z-[20] rounded-br-2xl rounded-bl-2xl font-bold"
            style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}>
            <div>
                GDD
            </div>

            <Navigation/>

            <HeaderOptions/>
        </nav>
    );
};

export default Header;