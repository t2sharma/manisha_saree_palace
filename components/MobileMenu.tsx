"use client";

import Link from "next/link";

export type NavItem = {
  href: string;
  label: string;
};

type Props = {
  open: boolean;
  items: NavItem[];
  currentPath: string;
  onClose: () => void;
};

export const MobileMenu = ({ open, items, currentPath, onClose }: Props) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm sm:hidden"
      aria-hidden={!open}
    >
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
        className="ml-auto flex h-full w-72 max-w-full flex-col bg-cream shadow-xl transition-transform duration-300 ease-out translate-x-0"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold/40">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-maroon">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-maroon/30 px-2 py-1 text-xs text-maroon focus:outline-none focus:ring-2 focus:ring-maroon/60 focus:ring-offset-2 focus:ring-offset-cream"
          >
            <span className="sr-only">Close menu</span>
            ✕
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-3" aria-label="Mobile">
          <ul className="space-y-1">
            {items.map((item) => {
              const active = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-full px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? "bg-maroon text-cream"
                        : "text-maroon hover:bg-maroon/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-gold/40 p-4">
          <a
            href="tel:+14082482851"
            className="block w-full rounded-full border border-maroon/40 bg-maroon px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-cream shadow-sm"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};
