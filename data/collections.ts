import type { GalleryItem } from "@/components/ImageGallery";

export type CategoryKey =
  | "sarees"
  | "bridal"
  | "lehengas"
  | "salwar"
  | "kids"
  | "men"
  | "accessories";

export type Category = {
  id: CategoryKey;
  name: string;
  description: string;
  items: GalleryItem[];
};

export const categories: Category[] = [
  {
    id: "sarees",
    name: "Sarees",
    description:
      "From everyday cottons and linens to Kanjeevaram silks, Banarasi weaves and designer drapes.",
    items: [
      { src: "/images/saree1.png", alt: "Row of colorful silk sarees", label: "Silk & designer sarees" },
      { src: "/images/saree3.png", alt: "Stacked sarees with zari borders", label: "Zari borders & festive hues" },
      { src: "/images/saree4.png", alt: "Close-up of intricate zari work", label: "Handworked borders" },
    ],
  },
  {
    id: "bridal",
    name: "Bridal Wear",
    description:
      "Curated bridal sarees and lehengas in maroon, gold and jewel tones with exquisite embroidery.",
    items: [
      { src: "/images/saree2.png", alt: "Maroon and gold bridal saree", label: "Maroon & gold bridal" },
      { src: "/images/saree2.png", alt: "Bridal dupatta with zari work", label: "Bridal dupattas" },
      { src: "/images/saree2.png", alt: "Lehenga detail with heavy embroidery", label: "Embroidered lehengas" },
    ],
  },
  {
    id: "lehengas",
    name: "Lehengas",
    description:
      "Contemporary and traditional lehengas for sangeet, mehndi, reception and festive occasions.",
    items: [
      { src: "/images/saree2.png", alt: "Maroon lehenga with gold work", label: "Bridal lehengas" },
      { src: "/images/saree3.png", alt: "Colorful lehenga skirts", label: "Sangeet & mehndi" },
      { src: "/images/saree4.png", alt: "Embroidery detail on lehenga", label: "Thread & sequin work" },
    ],
  },
  {
    id: "salwar",
    name: "Salwar Suits",
    description:
      "Ready-to-wear and semi-stitched salwar kameez, anarkalis and palazzo sets.",
    items: [
      { src: "/images/saree3.png", alt: "Rack of salwar suits", label: "Daily wear suits" },
      { src: "/images/saree4.png", alt: "Embroidered neckline detail", label: "Occasion anarkalis" },
      { src: "/images/saree1.png", alt: "Printed fabric detail", label: "Printed sets" },
    ],
  },
  {
    id: "kids",
    name: "Kids’ Wear",
    description:
      "Lehenga cholis, kurta sets and festive outfits for little ones.",
    items: [
      { src: "/images/saree3.png", alt: "Bright fabrics for kids wear", label: "Festive colors" },
      { src: "/images/saree1.png", alt: "Soft fabric detail", label: "Comfort-first fits" },
      { src: "/images/saree4.png", alt: "Embroidery suitable for kids", label: "Light embellishments" },
    ],
  },
  {
    id: "men",
    name: "Men’s Ethnic Wear",
    description:
      "Sherwanis, kurtas, jackets and sets for weddings, receptions and pujas.",
    items: [
      { src: "/images/saree3.png", alt: "Fabric for men’s kurtas", label: "Classic kurtas" },
      { src: "/images/saree4.png", alt: "Textured fabric detail", label: "Nehru jackets" },
      { src: "/images/saree1.png", alt: "Rich fabric suitable for sherwanis", label: "Sherwani fabrics" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    description:
      "Bangles, jewelry, bindis, dupattas, clutches and finishing touches for your look.",
    items: [
      { src: "/images/saree5.png", alt: "Bangles in maroon and gold", label: "Bangles & kadas" },
      { src: "/images/saree5.png", alt: "Accessory display", label: "Jewelry & bindis" },
      { src: "/images/saree5.png", alt: "Colorful bangles close-up", label: "Stackable sets" },
    ],
  },
];
