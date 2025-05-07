import HeadingSlider from "@/app/Components/HeadingSlider/HeadingSlider";
import {HiMiniStar} from "react-icons/hi2";
import productsMock from "../../mock/products-mock";
import React from "react";
import ProductsGrid from "@/app/Components/ProductsGrid/ProductsGrid";
import { FaRegFaceGrinStars } from "react-icons/fa6";

export default function Home() {
    const products = productsMock;

    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <HeadingSlider images={['img/clothes-1.jpg', 'img/clothes-2.jpg']}/>

            <section className="mt-10">
                <div className="flex items-start gap-2">
                    <HiMiniStar className="text-yellow-300" size={24}/>
                    <h2 className="text-xl">Em promoção</h2>
                </div>

                <p>Confira os nossos items em promoção essa semana. Não perca!</p>

                <div className="mt-6 flex gap-6">
                    <ProductsGrid products={products}/>
                </div>
            </section>

            <section className="mt-10">
                <div className="flex items-start gap-2">
                    <FaRegFaceGrinStars className="" size={24}/>
                    <h2 className="text-xl">Mais populares</h2>
                </div>

                <p>Confira os nossos items em promoção essa semana. Não perca!</p>

                <div className="mt-6 flex gap-6">
                    <ProductsGrid products={products}/>
                </div>
            </section>
        </div>
    );
}
