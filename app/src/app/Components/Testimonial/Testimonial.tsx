'use client';

import React, {useRef} from "react";
import {Testimonial as TestimonialType} from "@/types/testimonial";
import testimonialsMock from "../../../../mock/testimonials-mock";
import {Card} from "@/components/ui/card";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {HiMiniStar} from "react-icons/hi2";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonial: React.FC = () => {
    const testimonials: TestimonialType[] = testimonialsMock;
    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <article>
            <h2 className="text-xl">Testemunho dos nossos clientes</h2>

            <Carousel
                opts={{ loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={() => autoplay.current.play()}
                role="article"
                className="cursor-grab mt-6"
            >
                <CarouselContent>
                    {testimonials.map((testimonial: TestimonialType) => (
                        <CarouselItem
                            key={testimonial.uuid}
                            className="basis-auto min-w-[400px] min-h-[150px] select-none"
                        >
                            <Card
                                role="article"
                                className="p-4 flex flex-col justify-between h-full w-full"
                            >
                                <div className="flex items-end gap-4 mb-4">
                                    <img
                                        src={testimonial.img}
                                        alt={`Cliente ${testimonial.name}`}
                                        className="w-[50px] h-[50px] rounded-full border-2 border-zinc-800 shrink-0"
                                    />
                                    <div>
                                        <p>{testimonial.name}</p>
                                        <div className="flex gap-1 mb-1">
                                            {Array.from({ length: testimonial.stars }).map((_, index) => (
                                                <HiMiniStar key={index} className="text-yellow-300" size={20} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <FaQuoteLeft className="inline mr-2" />
                                    <p className="inline">{testimonial.comment}</p>
                                    <FaQuoteRight className="inline ml-2" />
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 cursor-pointer" />
                <CarouselNext className="right-2 cursor-pointer" />
            </Carousel>
        </article>
    );
};

export default Testimonial;