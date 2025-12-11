"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu, NavItem } from "./MobileMenu";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/bridal", label: "Bridal & Wedding" },
  { href: "/about", label: "About" },
  { href: "/accessories", label: "Accessories" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-lg shadow-black/5 backdrop-blur border-b border-gold/40"
          : "bg-gradient-to-r from-maroon/95 via-[#4b0f0f]/95 to-maroon/95 text-cream border-b border-gold/40"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
        role="navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-gold/70 bg-gradient-to-br from-gold/70 to-maroon/80 flex items-center justify-center text-xs font-semibold tracking-[0.2em] uppercase">
            MSP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-sm sm:text-base font-semibold tracking-wide">
              Manisha Saree Palace
            </span>
            <span className="text-[11px] sm:text-xs opacity-80">
              Sunnyvale • Since 2003
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-gold/60 px-2.5 py-1.5 text-xs font-medium text-cream shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-1 focus:ring-offset-maroon sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="mr-1 text-[11px] tracking-wide uppercase">Menu</span>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  active
                    ? "bg-gold text-maroon shadow-sm"
                    : scrolled
                    ? "text-maroon hover:bg-maroon/5"
                    : "text-cream/90 hover:bg-black/10"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-maroon/70" />
                )}
              </Link>
            );
          })}
          <a
            href="tel:+14082482851"
            className="ml-2 hidden rounded-full border border-gold/80 bg-gold/95 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-maroon shadow-md shadow-black/10 hover:bg-gold transition-colors md:inline-block"
          >
            Call Now
          </a>
        </div>
      </nav>

      <MobileMenu
        open={open}
        items={navItems}
        currentPath={pathname}
        onClose={() => setOpen(false)}
      />
    </header>
  );
};
