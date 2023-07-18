import { toast } from "react-hot-toast";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useUpdateUserReadingMutation } from "../redux/features/user/userApi";
import { useAppSelector } from "../redux/hooks";
import { iBook } from "../types/globalTypes";

type iProps = {
  book: iBook;
  isReading?: string;
};

const BookGrid = ({ book, isReading = "" }: iProps) => {
  const date = new Date(book.publicationDate).toLocaleDateString();

  const { data: user } = useAppSelector((state) => state.user);
  const [updateUserReading] = useUpdateUserReadingMutation();

  const handleReading = async (value: string) => {
    await updateUserReading({
      id: user?._id,
      data: { book: book._id, stage: value },
    });
    toast.success("Reading added successfull.");
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body gap-y-1">
          <HiOutlineBookOpen className="text-lg"></HiOutlineBookOpen>
          <h2 className="text-lg font-semibold">{book.name}</h2>
          <p className="text-sm">
            By <span className="hover:underline">{book.author}</span>
          </p>

          <div className="text-sm font-medium flex justify-between mb-5">
            <span>{book.genre}</span>
            <span>{date}</span>
          </div>

          {isReading && (
            <div className="form-control w-full max-w-xs mb-2">
              <select
                className="select select-sm select-bordered"
                onChange={(e) => handleReading(e.target.value)}
                defaultValue={isReading ? isReading : "Reading Condition"}
              >
                <option disabled>Reading Condition</option>
                <option>Reading</option>
                <option>Reading Soon</option>
                <option>Finished</option>
              </select>
            </div>
          )}

          <div className="card-actions justify-end">
            <Link
              to={`/all-books/${book._id as number}`}
              className="btn btn-primary btn-sm w-full text-xs"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookGrid;
