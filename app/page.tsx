import { HeroCarousel } from "@/components/HeroCarousel";
import { CategorySection } from "@/components/CategorySection";
import { ImageGallery } from "@/components/ImageGallery";
import { categories } from "@/data/collections";
import Link from "next/link";

export default function HomePage() {
  const heroCategories = categories.slice(0, 3);

  return (
    <>
      <HeroCarousel />

      <section id="highlights" className="section-wrapper">
        <div className="section-inner grid gap-6 md:grid-cols-3">
          <div className="card-silk p-4 text-sm text-maroon/90">
            <p className="font-heading text-base text-maroon">
              Expert draping & fittings
            </p>
            <p>
              Personalized styling, blouse sizing and drape help so you feel
              confident and comfortable.
            </p>
          </div>
          <div className="card-silk p-4 text-sm text-maroon/90">
            <p className="font-heading text-base text-maroon">
              In-house alterations
            </p>
            <p>
              Tailoring for saree falls, blouses, lehengas and suits for a
              polished, made-for-you look.
            </p>
          </div>
          <div className="card-silk p-4 text-sm text-maroon/90">
            <p className="font-heading text-base text-maroon">
              Weddings & special occasions
            </p>
            <p>
              Bridal trousseau, family outfits and coordinated looks for
              ceremonies and receptions.
            </p>
          </div>
        </div>
      </section>

      <CategorySection
        title="Explore Our Collections"
        eyebrow="Collections"
        description="Curated Indian wear for weddings, festivals, temple visits and everyday elegance."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {heroCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h3 className="font-heading text-lg text-maroon">
                {category.name}
              </h3>
              <ImageGallery items={category.items.slice(0, 3)} />
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center rounded-full border border-maroon/40 bg-maroon px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md hover:bg-[#5c1515]"
          >
            View All Collections
          </Link>
        </div>
      </CategorySection>

      <CategorySection
        title="Bridal & Wedding Styling"
        eyebrow="Bridal Studio"
        description="Dedicated support for brides, grooms and families-outfits, jewelry and alterations under one roof."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-maroon/90">
            <p>
              From engagement to reception, we help brides and families select
              sarees, lehengas and coordinated outfits that reflect regional
              traditions and personal style. Bring your inspiration and we’ll
              guide you through fabrics, colors and draping options.
            </p>
            <p>
              Book a bridal consultation to explore maroon, gold and jewel-toned
              ensembles, jewelry and dupattas, with time built in for fittings
              and tailoring.
            </p>
            <Link
              href="/bridal"
              className="inline-flex items-center justify-center rounded-full border border-maroon/40 bg-cream px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon hover:bg-white"
            >
              Explore Bridal & Wedding
            </Link>
          </div>
          <div className="card-silk p-5 text-sm text-maroon/90 space-y-3">
            <p className="font-heading text-lg text-maroon">
              Navratri Collection 2025 Coming Soon
            </p>
            <p>
              Limited-edition chaniya cholis, festive sarees and accessories for
              garba and dandiya nights. Reserve your outfits early for best
              sizes and designs.
            </p>
            <p className="text-xs text-maroon/80">
              Call us to inquire about arrival dates and pre-booking.
            </p>
          </div>
        </div>
      </CategorySection>
    </>
  );
}
