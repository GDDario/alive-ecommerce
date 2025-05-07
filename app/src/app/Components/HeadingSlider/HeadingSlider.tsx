import React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";

type HeadingSliderProps = {
    images: string[];
    className?: string;
};

/**
 * Big slider/carousel, to be put on heading sections or into it's own.
 */
const HeadingSlider: React.FC<HeadingSliderProps> = ({images, className}: HeadingSliderProps) => {
    return (
        <Carousel className={`relative ${className}`} role="article">
            <CarouselContent>
                {images.map((image: string, index) => (
                    <CarouselItem key={`${image}-${index}`}>
                        <Card className="h-[375px] overflow-hidden">
                            <img src={image} alt="" className="object-cover"/>
                        </Card>
                    </CarouselItem>))}

            </CarouselContent>

            <CarouselNext className="bg-zinc-800 text-white right-8 cursor-pointer"/>
            <CarouselPrevious className="bg-zinc-800 text-white left-8 cursor-pointer"/>
        </Carousel>
    );
};

export default HeadingSlider;