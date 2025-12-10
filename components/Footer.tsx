export const Footer = () => {
  return (
    <footer className="border-t border-gold/40 bg-maroon text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-heading text-base font-semibold tracking-wide">
            Manisha Saree Palace
          </p>
          <p className="text-xs opacity-90">
            1053 E El Camino Real STE 7, Sunnyvale, CA 94087
          </p>
          <a
            href="tel:+14082482851"
            className="text-xs font-medium text-gold hover:underline"
          >
            Phone: (408) 248-2851
          </a>
        </div>
        <div className="text-xs text-cream/80">
          <p>
            © {new Date().getFullYear()} Manisha Saree Palace. All rights
            reserved.
          </p>
          <p className="mt-1">
            Crafted with care to celebrate Indian textiles & tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};
