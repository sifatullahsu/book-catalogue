import BookForm from "../components/BookForm";

const EditBook = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Edit Book</h3>
            <p>Edit the form and submit to modify the book.</p>
          </div>
          <BookForm />
        </div>
      </div>
    </>
  );
};

export default EditBook;
