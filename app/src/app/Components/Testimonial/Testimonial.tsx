import React from "react";
import {Testimonial as TestimonialType} from "@/types/testimonial";
import testimonialsMock from "../../../../mock/testimonials-mock";
import {Card} from "@/components/ui/card";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {HiMiniStar} from "react-icons/hi2";

const Testimonial: React.FC = () => {
    const testimonials: TestimonialType[] = testimonialsMock;

    return (
        <article>
            <h2 className="text-xl">Testemunho dos nossos clientes</h2>

            <Carousel role="article" className="cursor-grab mt-6">
                <CarouselContent>
                    {
                        testimonials.map((testimonial: TestimonialType) => (
                            <CarouselItem key={testimonial.uuid} className="md:basis-1/3 lg:basis-1/4 select-none">
                                <Card key={testimonial.uuid} role="article" className="w-[400px] h-[150px] p-4 flex justify-between">
                                    <div className="flex items-end gap-4">
                                        <img
                                            src={testimonial.img}
                                            alt={`Cliente ${testimonial.name}`}
                                            className="w-[50px] h-[50px] rounded-full border-2 border-zinc-800"
                                        />
                                        <p>{testimonial.name}</p>

                                        <div className="flex gap-1 mb-1">
                                            {
                                                Array.from({length: testimonial.stars}).map((_: any) =>
                                                    <HiMiniStar key={_} className="text-yellow-300" size={20}/>)
                                            }
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <FaQuoteLeft className="inline mr-2"/>
                                        <p className="inline">{testimonial.comment}</p>
                                        <FaQuoteRight className="inline ml-2"/>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <CarouselNext className="right-2 cursor-pointer"/>
                <CarouselPrevious className="left-2 cursor-pointer"/>
            </Carousel>
        </article>
    );
};

export default Testimonial;