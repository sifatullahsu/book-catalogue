import { ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import { iBook } from "../types/globalTypes";

const EditBook = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetBookQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const { data: user } = useAppSelector((state) => state.user);

  const [updateBook] = useUpdateBookMutation();

  const handleEditBook = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;

    const data: iBook = {
      name: form.book_name.value,
      author: form.author.value,
      publicationDate: form.publication_date.value,
      genre: form.genre.value,
      summery: form.summery.value,
      user: user?._id as string,
    };

    await updateBook({ id, data });
    toast.success("Book updated successfull!");
  };

  if (isLoading || isFetching) return <div>loading</div>;

  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Edit Book</h3>
            <p>Edit the form and submit to modify the book.</p>
          </div>
          <BookForm data={data?.data} handler={handleEditBook} />
          {data.data.user !== user?._id && (
            <div className="text-sm text-red-600 mt-5">
              You are not authorized your to update the book.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EditBook;
