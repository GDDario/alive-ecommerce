import React from "react";
import Image from "next/image";

const SocialMedia: React.FC = () => {
    return (
        <div>
            <h4 className="text-white">Nossas redes sociais</h4>

            <div className="flex items-center gap-4 mt-4">
                <a href="#"><Image src="/img/icons/facebook.png" alt="Facebook" width={30} height={30}/></a>
                <a href="#"><Image src="/img/icons/instagram.png" alt="Instagram" width={30} height={30}/></a>
                <a href="#"><Image src="/img/icons/x.png" alt="X" width={30} height={30}/></a>
            </div>
        </div>
    );
};

export default SocialMedia;