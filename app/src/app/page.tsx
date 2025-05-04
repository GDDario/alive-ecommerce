import Image from "next/image";
import HeadingSlider from "@/app/Components/HeadingSlider/HeadingSlider";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeadingSlider images={['img/clothes-1.jpg', 'img/clothes-2.jpg']} />
    </div>
  );
}
