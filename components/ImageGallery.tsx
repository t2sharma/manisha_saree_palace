import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
};

type Props = {
  items: GalleryItem[];
};

export const ImageGallery = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      {items.map((item) => (
        <figure
          key={item.src + item.alt}
          className="group relative overflow-hidden rounded-2xl border border-gold/40 bg-cream/80 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {item.label && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-3 pb-2 pt-6 text-xs text-cream">
              {item.label}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};
