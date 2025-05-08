import React from "react";
import Newsletter from "@/app/Components/Footer/Newsletter";
import MissionVisionValues from "@/app/Components/Footer/MissionVisionValues";

const Footer: React.FC = () => {
    return (
        <section className="bg-black py-4 px-8">
            <div className="flex gap-4 justify-between">
                <MissionVisionValues />

                <Newsletter />
            </div>
        </section>
    );
};

export default Footer;