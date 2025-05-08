import React from "react";
import Newsletter from "@/app/Components/Footer/Newsletter";
import MissionVisionValues from "@/app/Components/Footer/MissionVisionValues";
import SocialMedia from "@/app/Components/Footer/SocialMedia";
import Certificates from "@/app/Components/Footer/Certificates";

const Footer: React.FC = () => {
    return (
        <section className="bg-black py-4 px-8">
            <div className="flex gap-4 justify-between">
                <MissionVisionValues/>

                <Newsletter/>
            </div>

            <div className="flex gap-4 justify-between mt-12">
                <SocialMedia/>

                <Certificates/>
            </div>
        </section>
    );
};

export default Footer;