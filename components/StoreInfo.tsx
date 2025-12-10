import Image from "next/image";

export const StoreInfo = () => {
  return (
    <section className="section-wrapper">
      <div className="section-inner grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-4 text-sm text-maroon/90">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon/70">
            About Manisha Saree Palace
          </p>
          <h1 className="font-heading text-2xl md:text-3xl text-maroon">
            Family-owned boutique serving the Bay Area for over 20 years
          </h1>
          <p>
            Manisha Saree Palace has been a trusted destination for authentic
            Indian sarees, bridal lehengas, salwar suits and ethnic wear in the
            Bay Area for more than two decades. Our family personally curates
            each piece to balance tradition, craftsmanship and contemporary
            silhouettes.
          </p>
          <p>
            From everyday cottons to designer bridal ensembles, we focus on fit,
            drape and comfort. Our in-house tailoring and alterations team helps
            you achieve a made-for-you look for weddings, festivals and special
            occasions.
          </p>
          <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/60 bg-cream/80 p-3">
              <p className="font-heading text-sm text-maroon">Our Values</p>
              <p>Quality • Tradition • Service • Authenticity</p>
            </div>
            <div className="rounded-2xl border border-maroon/20 bg-white/80 p-3">
              <p className="font-heading text-sm text-maroon">Customers</p>
              <p>
                Serving generations of Bay Area families for weddings, pujas &
                celebrations.
              </p>
            </div>
          </div>
        </div>
        <div className="card-silk overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/store_pic.png"
              alt="Manisha Saree Palace storefront in Sunnyvale, California"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
