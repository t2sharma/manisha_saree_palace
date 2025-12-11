import { CategorySection } from "@/components/CategorySection";
import { ImageGallery } from "@/components/ImageGallery";
import { categories } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <>
      <section className="section-wrapper">
        <div className="section-inner space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon/70">
            Collections
          </p>
          <h1 className="font-heading text-2xl md:text-3xl text-maroon">
            Sarees, Bridal Wear, Lehengas & More
          </h1>
          <p className="max-w-2xl text-sm text-maroon/90">
            Discover a curated selection of sarees, bridal ensembles, salwar
            suits, kids’ wear, men’s sherwanis and accessories-thoughtfully
            chosen to celebrate regional craftsmanship and modern silhouettes.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <CategorySection
          key={category.id}
          title={category.name}
          description={category.description}
        >
          <ImageGallery items={category.items} />
        </CategorySection>
      ))}
    </>
  );
}
