import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { useGetBookQuery } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import { iBook } from "../types/globalTypes";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);
  const { data: user } = useAppSelector((state) => state.user);

  if (isLoading) return <div>loading</div>;

  const book: iBook = data.data;
  const isAuthorized = book.user === user?._id;
  console.log(isAuthorized);

  return (
    <>
      <div className="container relative">
        <div className="p-5 pt-14 md:p-8 lg:p-16">
          <HiOutlineBookOpen className="text-lg"></HiOutlineBookOpen>
          <h2 className="text-lg font-semibold">{book?.name}</h2>

          <p className="text-sm">
            By <span className="hover:underline">{book?.author}</span>
          </p>

          <div className="text-sm font-medium my-5">
            <p>Genre: {book?.genre}</p>
            <p>
              Publication Date:
              {new Date(book?.publicationDate).toLocaleDateString()}
            </p>
          </div>

          <div>{book?.summery}</div>
          <div className="space-x-1 absolute top-10 right-5">
            <button disabled={!isAuthorized}></button>
            {isAuthorized ? (
              <Link
                to={`/all-books/${id as string}/edit`}
                className="btn btn-sm btn-ghost px-1 text-2xl "
              >
                <BiEdit />
              </Link>
            ) : (
              <button
                disabled={!isAuthorized}
                className="btn btn-sm btn-ghost px-1 text-2xl "
              >
                <BiEdit />
              </button>
            )}
            <button
              disabled={!isAuthorized}
              className="btn btn-sm btn-ghost px-1 text-2xl "
            >
              <AiOutlineDelete />
            </button>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-100 p-8 md:p-10 mt-14 text-sm">
            <div className="border-t border-gray-200">
              <div className="flex space-x-3 py-2 items-center border-b border-gray-200">
                <img
                  src="https://source.unsplash.com/30x30/?portrait"
                  alt=""
                  className="rounded-full"
                />
                <div>Book ta khub unique.</div>
              </div>
              <div className="flex space-x-3 py-2 items-center border-b border-gray-200">
                <img
                  src="https://source.unsplash.com/30x30/?portrait"
                  alt=""
                  className="rounded-full"
                />
                <div>Book ta khub e valo.</div>
              </div>
              <div className="flex space-x-3 py-2 items-center border-b border-gray-200">
                <img
                  src="https://source.unsplash.com/30x30/?portrait"
                  alt=""
                  className="rounded-full"
                />
                <div>Book ta khub e chomotkar.</div>
              </div>
            </div>
            <div className="mt-5">
              <textarea
                className="textarea w-full textarea-bordered"
                placeholder="Comment"
                disabled={!user}
              ></textarea>
              <button
                disabled={!user}
                className="btn btn-primary btn-sm w-full text-xs"
              >
                Submit Comment
              </button>
              {!user && (
                <p className="text-red-600 text-sm">
                  Please login for the comment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
