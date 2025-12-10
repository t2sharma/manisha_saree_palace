export const ContactCard = () => {
  return (
    <div className="card-silk p-5 space-y-3 text-sm text-maroon/90">
      <h3 className="font-heading text-lg text-maroon">Visit or Contact Us</h3>
      <p>
        <span className="font-semibold">Address:</span> 1053 E El Camino Real
        STE 7, Sunnyvale, CA 94087
      </p>
      <p>
        <span className="font-semibold">Phone:</span>{" "}
        <a
          href="tel:+14082482851"
          className="text-maroon underline-offset-2 hover:underline"
        >
          (408) 248-2851
        </a>
      </p>
      <p>
        <span className="font-semibold">Parking:</span> Convenient parking in
        the shopping center lot.
      </p>
      <a
        href="tel:+14082482851"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md hover:bg-[#5c1515]"
      >
        Call Now
      </a>
    </div>
  );
};
