'use client';

import {Product, Variant} from "@/types/product";
import {Card} from "@/components/ui/card";
import React, {useState} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import ColorButton from "@/app/Components/ProductsGrid/ColorButton";
import {Button} from "@/components/ui/button";
import { HiOutlineShoppingCart } from "react-icons/hi2";

type ProductCardProps = {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}: ProductCardProps) => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const variant: Variant = product.variants[selectedVariant];

    const onSelectVariant = (variantIndex: number): void => setSelectedVariant(variantIndex);

    return (
        <Card role="article" className="min-h-[400px] w-[400px]">
            <Carousel className="relative w-full">
                <CarouselContent>
                    {variant.images.map((image: string, index: number) => (
                        <CarouselItem key={`${index}-${image}`}>
                            <img src={image} alt={product.name} className="object-cover h-[350px] w-full"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselNext className="bg-zinc-800 text-white right-4 cursor-pointer"/>
                <CarouselPrevious className="bg-zinc-800 text-white left-4 cursor-pointer"/>
            </Carousel>

            <section className="p-4">
                <p>{product.name}</p>

                <p>R$ {variant.price.toFixed(2).replace(".", ",")}</p>

                {/* 1px margin to compensate the first element ring */}
                <div className="flex gap-2 mt-4 ml-[1px]">
                    {
                        product.variants.map((variant: Variant, index: number) => (
                            <ColorButton
                                key={`${variant.uuid}-${variant.color}`}
                                color={variant.color}
                                hex_color={variant.hex_color}
                                selected={selectedVariant === index}
                                onSelect={() => onSelectVariant(index)}
                            />
                        ))
                    }
                </div>

                <div className="flex gap-4 mt-4">
                    <Button className="flex-[3] truncate">
                        Ver produto
                    </Button>

                    <Button className="flex-[1] truncate">
                        <HiOutlineShoppingCart />
                    </Button>
                </div>
            </section>
        </Card>
    );
};

export default ProductCard;