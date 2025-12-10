import Image from "next/image";
import { CategorySection } from "@/components/CategorySection";
import { BridalAppointmentForm } from "@/components/BridalAppointmentForm";

export default function BridalPage() {
  return (
    <>
      <section className="section-wrapper">
        <div className="section-inner grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4 text-sm text-maroon/90">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon/70">
              Bridal & Wedding
            </p>
            <h1 className="font-heading text-2xl md:text-3xl text-maroon">
              Maroon & Gold Bridal Ensembles for Your Wedding Story
            </h1>
            <p>
              Our bridal studio features rich maroon and gold sarees, lehengas
              and dupattas with intricate zari, stone and thread work. Whether
              you prefer a classic South Indian silk look or contemporary
              silhouettes, we help you find a bridal outfit that feels personal
              and timeless.
            </p>
            <p>
              We also coordinate outfits for mothers, sisters, grooms and
              extended family—ensuring everyone feels special while complementing
              the couple’s palette.
            </p>
          </div>
          <div className="card-silk overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/saree2.png"
                alt="Maroon and gold bridal saree displayed on mannequin"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CategorySection
        title="Request a Bridal Appointment"
        description="Share your wedding date, inspiration and outfit preferences. We’ll follow up to schedule a personalized in-store consultation."
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <BridalAppointmentForm />

          <div className="space-y-4 text-sm text-maroon/90">
            <div className="card-silk p-5 space-y-3">
              <h2 className="font-heading text-lg text-maroon">
                Bridal Testimonials
              </h2>
              <p className="italic">
                “I found my dream maroon and gold bridal saree here. The team
                patiently helped me drape different styles and coordinated
                outfits for my mom and sister. Alterations were perfect and on
                time.”
              </p>
              <p className="text-xs text-maroon/70">— A Bay Area Bride</p>
              <p className="italic">
                “They understood our South + North Indian wedding events and
                suggested looks that felt true to both sides of the family.”
              </p>
            </div>
          </div>
        </div>
      </CategorySection>
    </>
  );
}
