import Image from "next/image";
import type { Root2 } from "../../type/productType";

type ProductCardProps = {
  app: Root2;
};

const ProductCard = ({ app }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col justify-between p-2 hover:shadow-md transition-shadow w-full max-w-47.5 mx-auto">
      <div>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2">
          <Image
            src={app.image}
            alt={app.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 45vw, 190px"
          />
        </div>

        <h3 className="text-xs font-semibold text-slate-800 line-clamp-1 leading-snug text-left">
          {app.title}
        </h3>
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-1 text-[10px] font-medium">
        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-1 sm:px-1.5 py-0.5 rounded-sm min-w-0">
          <svg
            className="w-2.5 h-2.5 fill-current shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          <span className="truncate">{app.downloads}</span>
        </div>

        <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-1 sm:px-1.5 py-0.5 rounded-sm shrink-0">
          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span>{app.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
