import { HiOutlineBookOpen } from "react-icons/hi";

const BookGrid = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body gap-y-1">
          <HiOutlineBookOpen className="text-lg"></HiOutlineBookOpen>
          <h2 className="text-lg font-semibold">Shoes!</h2>
          <p className="text-sm">
            By <span className="hover:underline">Shadat Hossain</span>
          </p>

          <div className="text-sm font-medium flex justify-between mb-5">
            <span>Fiction</span>
            <span>25-02-2023</span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm w-full text-xs">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookGrid;
