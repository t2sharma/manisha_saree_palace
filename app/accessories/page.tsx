import { CategorySection } from "@/components/CategorySection";
import { ImageGallery } from "@/components/ImageGallery";
import { categories } from "@/data/collections";

export default function AccessoriesPage() {
  const accessories = categories.find((c) => c.id === "accessories");

  return (
    <>
      <section className="section-wrapper">
        <div className="section-inner space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon/70">
            Accessories
          </p>
          <h1 className="font-heading text-2xl md:text-3xl text-maroon">
            Bangles, Jewelry, Bindis & Dupattas
          </h1>
          <p className="max-w-2xl text-sm text-maroon/90">
            Complete your look with curated accessories—from traditional glass
            and metal bangles to statement earrings, bindis, stoles and
            embellished dupattas.
          </p>
        </div>
      </section>

      {accessories && (
        <CategorySection
          title={accessories.name}
          description={accessories.description}
        >
          <ImageGallery items={accessories.items} />
        </CategorySection>
      )}

      <section className="section-wrapper">
        <div className="section-inner grid gap-6 md:grid-cols-3 text-sm text-maroon/90">
          <div className="card-silk p-4">
            <h2 className="font-heading text-lg text-maroon">Bangles</h2>
            <p>
              Mix and match glass, metal and stone-studded bangles in maroon,
              gold and jewel tones to coordinate with your sarees and lehengas.
            </p>
          </div>
          <div className="card-silk p-4">
            <h2 className="font-heading text-lg text-maroon">Jewelry & Bindis</h2>
            <p>
              Choose from necklaces, earrings, maang tikkas and bindi sets to
              complete your bridal or festive look.
            </p>
          </div>
          <div className="card-silk p-4">
            <h2 className="font-heading text-lg text-maroon">Dupattas & Stoles</h2>
            <p>
              Elevate simple suits and lehengas with embellished dupattas,
              Banarasi stoles and lightweight festive wraps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
