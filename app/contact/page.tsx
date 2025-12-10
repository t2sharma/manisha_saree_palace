import { BusinessHours } from "@/components/BusinessHours";
import { ContactCard } from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <>
      <section className="section-wrapper">
        <div className="section-inner space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon/70">
            Contact & Visit
          </p>
          <h1 className="font-heading text-2xl md:text-3xl text-maroon">
            Visit Manisha Saree Palace in Sunnyvale
          </h1>
          <p className="max-w-2xl text-sm text-maroon/90">
            We’d love to help you find the perfect saree, bridal ensemble or
            festive outfit. Visit our boutique or call us to discuss your
            occasion and styling needs.
          </p>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="section-inner grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="card-silk overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Manisha Saree Palace Location"
                  src="https://www.google.com/maps?q=1053+E+El+Camino+Real+STE+7,+Sunnyvale,+CA+94087&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <BusinessHours />
          </div>

          <ContactCard />
        </div>
      </section>
    </>
  );
}
