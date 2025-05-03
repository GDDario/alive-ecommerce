import React from "react";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi2";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {HiShoppingBag} from "react-icons/hi2";
import {HiOutlineUserCircle} from "react-icons/hi2";
import {HiOutlineShoppingBag} from "react-icons/hi2";
import {Button} from "@/components/ui/button";
import Navigation from "@/app/Components/Header/Navigation";

const Header: React.FC = () => {
    return (
        <nav
            className="w-full lg:h-[60px] py-5 px-20 flex justify-between items-center gap-12 glassy-panel
             fixed top-0 left-0 z-[20] rounded-br-2xl rounded-bl-2xl"
            style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}>
            <div>
                LOGO MANEIRO
            </div>

            <Navigation/>

            <div className="flex gap-2 [&_svg]:size-6">
                <Button variant="ghost" className="rounded-button h-10 w-10">
                    <HiOutlineQuestionMarkCircle className="[&_svg]:size-1"/>
                </Button>

                <Button variant="ghost" className="rounded-button h-10 w-10">
                    <HiOutlineMagnifyingGlass className="[&_svg]:size-1"/>
                </Button>

                <Button variant="ghost" className="rounded-button h-10 w-10">
                    <HiOutlineShoppingBag className="[&_svg]:size-1"/>
                </Button>

                <a href="/login">
                    <Button variant="ghost" className="rounded-button h-10 w-10">
                        <HiOutlineUserCircle className="[&_svg]:size-1"/>
                    </Button>
                </a>
            </div>
        </nav>
    );
};

export default Header;