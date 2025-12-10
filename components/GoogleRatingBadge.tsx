type Props = {
  rating: number;
  reviewCount?: number;
};

export const GoogleRatingBadge = ({ rating, reviewCount }: Props) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/90 px-3 py-1 text-xs shadow-sm">
      <div className="flex items-center gap-1 text-amber-500">
        <span>★</span>
        <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
      </div>
      <div className="h-3 w-px bg-slate-200" />
      <div className="flex flex-col leading-tight text-[10px] text-slate-700">
        <span className="font-semibold tracking-wide uppercase">Google Reviews</span>
        <span>{reviewCount ? `${reviewCount}+ reviews` : "Local favorite in Sunnyvale"}</span>
      </div>
    </div>
  );
};
