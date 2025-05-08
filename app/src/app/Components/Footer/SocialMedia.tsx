import React from "react";

const SocialMedia: React.FC = () => {
    return (
        <div>
            <h4 className="text-white">Nossas redes sociais</h4>

            <div className="flex items-center gap-4 mt-4">
                <a href="#"><img src="img/icons/facebook.png" alt="Facebook" className="w-7 h-7"/></a>
                <a href="#"><img src="img/icons/instagram.png" alt="Instagram" className="w-7 h-7"/></a>
                <a href="#"><img src="img/icons/x.png" alt="X" className="w-7 h-7"/></a>
            </div>
        </div>
    );
};

export default SocialMedia;