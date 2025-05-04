import React from "react";
import {Button} from "@/components/ui/button";
import {
    HiOutlineMagnifyingGlass,
    HiOutlineQuestionMarkCircle,
    HiOutlineShoppingBag,
    HiOutlineUserCircle
} from "react-icons/hi2";

const HeaderOptions: React.FC = () => {
    return (
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
    );
};

export default HeaderOptions;