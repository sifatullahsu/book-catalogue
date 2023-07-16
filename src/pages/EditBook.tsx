import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { iBook } from "../types/globalTypes";

const EditBook = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);

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
      user: "dd",
    };

    await updateBook({ id, data })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  if (isLoading) return <div>loading</div>;

  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Edit Book</h3>
            <p>Edit the form and submit to modify the book.</p>
          </div>
          <BookForm data={data?.data} handler={handleEditBook} />
        </div>
      </div>
    </>
  );
};

export default EditBook;
