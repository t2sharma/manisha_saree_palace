"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ReviewBadge } from "@/components/ReviewBadge";

const slides = [
  {
    src: "/images/saree1.png",
    alt: "Elegant silk sarees displayed on a rack",
  },
  {
    src: "/images/saree2.png",
    alt: "Maroon and gold bridal saree ensemble",
  },
  {
    src: "/images/saree3.png",
    alt: "Colorful designer sarees folded in stacks",
  },
  {
    src: "/images/saree4.png",
    alt: "Detail of zari work and embroidery",
  },
  {
    src: "/images/saree5.png",
    alt: "Traditional bangles and accessories display",
  },
];

export const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="section-wrapper pt-8 md:pt-16 lg:pt-20">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
        <div className="fade-in-up visible space-y-6 md:space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cream/70 px-3 py-1 text-xs font-medium text-maroon shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Family-owned Indian boutique in Sunnyvale
          </div>
          <h1 className="font-heading text-3xl leading-tight text-maroon sm:text-4xl md:text-5xl">
            Authentic Indian Sarees, Bridal Wear & Ethnic Fashion in Sunnyvale
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-maroon/90">
            Family-owned for 20+ years, Manisha Saree Palace curates premium
            sarees, bridal lehengas, salwar suits, kids’ wear, men’s sherwanis
            and accessories—with expert fittings and in-house alterations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+14082482851"
              className="rounded-full bg-maroon px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-cream shadow-lg shadow-maroon/30 hover:bg-[#5c1515] transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Manisha+Saree+Palace,1053+E+El+Camino+Real+STE+7,+Sunnyvale,+CA+94087"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-maroon/40 bg-gold/95 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-maroon shadow-md hover:bg-gold transition-colors"
            >
              Get Directions
            </a>
            <Link
              href="/collections"
              className="rounded-full border border-maroon/30 bg-cream/80 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-maroon hover:bg-white/90 transition-colors"
            >
              View Collections
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <ReviewBadge />
            <p className="text-xs text-maroon/80 max-w-xs">
              “Large selection of Indian outfits, including saris and bridal wear,
              with attentive service and alterations.”
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-gold/50 bg-cream/80 p-3 text-xs text-maroon/90 shadow-sm inline-flex items-center gap-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-maroon text-[11px] font-semibold text-cream">
              2025
            </span>
            <div>
              <p className="font-semibold tracking-wide uppercase text-[11px]">Navratri Collection 2025 Coming Soon</p>
              <p>Book your bridal and festive appointments early for best selection.</p>
            </div>
          </div>
        </div>

        <div className="relative fade-in-up visible">
          <div className="card-silk overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              {slides.map((slide, i) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="border-t border-gold/50 bg-gradient-to-r from-maroon via-[#4b0f0f] to-maroon px-4 py-3 text-xs text-cream flex items-center justify-between">
              <span>Curated sarees, lehengas & occasion wear</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-gold">
                Sunnyvale • Bay Area
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-4 hidden h-20 w-20 rounded-full border border-gold/70 bg-gold/60 blur-2xl sm:block" />
          <div className="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-full border border-gold/70 bg-maroon/70 blur-2xl sm:block" />
        </div>
      </div>
    </section>
  );
};
