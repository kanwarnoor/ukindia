import Image from "next/image";
import Link from "next/link";

interface cardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({ image, title, description, link }: cardProps) {
  return (
    <div className="relative lg:w-[350px] lg:h-[350px] max-w-sm overflow-hidden rounded-2xl shadow-lg flex flex-col justify-between items-center ">
      {/* Background Image */}
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white ">
        <div>
          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
            <span className="text-lg font-bold">🏛️</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 md:text-4xl text-3xl font-semibold">{title}</h3>

          {/* Description */}
          <p className="md:text-base text-sm leading-relaxed text-white/90 font-medium mt-5">{description}</p>
        </div>

        {/* CTA */}
        <Link
          href={link}
          className="mt-6 inline-flex items-center justify-between rounded-full bg-white px-5 py-3 md:text-md text-sm font-medium text-ukindia  transition hover:bg-ukindia hover:text-white"
        >
          <span>Read More..</span>
          <span className="ml-3 md:text-md text-sm">↗</span>
        </Link>
      </div>
    </div>
  );
}
