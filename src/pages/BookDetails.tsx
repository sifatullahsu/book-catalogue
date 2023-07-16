/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import {
  useCreateCommentMutation,
  useGetBookQuery,
  useGetCommentQuery,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import { iBook, iComment } from "../types/globalTypes";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);
  const { data: comment } = useGetCommentQuery(id);
  const { data: user } = useAppSelector((state) => state.user);
  const [createComment] = useCreateCommentMutation();

  if (isLoading) return <div>loading</div>;

  const book: iBook = data.data;
  const isAuthorized = book.user === user?._id;

  const handleComment = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target;
    const comment = form.comment.value;

    const data = {
      user: user?._id,
      book: id,
      comment,
    };

    console.log(data);

    await createComment(data).then((data: any) => {
      if (data?.data) {
        toast.success("Comment added successfull.");
        form.reset();
      } else if (data?.error) {
        toast.error("Somthing is wrong");
      }
    });
  };

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
              {comment?.data?.map((comment: iComment) => (
                <div
                  key={comment._id}
                  className="flex space-x-3 py-2 items-center border-b border-gray-200"
                >
                  <img
                    src="https://source.unsplash.com/30x30/?portrait"
                    alt=""
                    className="rounded-full"
                  />
                  <div>{comment?.comment}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleComment} className="mt-5">
              <textarea
                name="comment"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
