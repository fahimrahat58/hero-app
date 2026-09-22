const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 w-full border border-base-200 shadow-sm">
      {" "}
      <div className="card-body">
        {" "}
        <div className="flex items-center gap-4">
          {" "}
          <div className="skeleton h-16 w-16 shrink-0 rounded-xl"></div>{" "}
          <div className="flex flex-1 flex-col gap-3">
            {" "}
            <div className="skeleton h-4 w-3/4"></div>{" "}
            <div className="skeleton h-3 w-1/2"></div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-4 flex flex-col gap-3">
          {" "}
          <div className="skeleton h-3 w-full"></div>{" "}
          <div className="skeleton h-3 w-5/6"></div>{" "}
          <div className="skeleton h-3 w-2/3"></div>{" "}
        </div>{" "}
        <div className="mt-4 flex items-center justify-between">
          {" "}
          <div className="skeleton h-4 w-16"></div>{" "}
          <div className="skeleton h-4 w-20"></div>{" "}
        </div>{" "}
        <div className="skeleton mt-4 h-10 w-full rounded-lg"></div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProductCardSkeleton;
