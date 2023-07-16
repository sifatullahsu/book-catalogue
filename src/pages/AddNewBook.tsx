import BookForm from "../components/BookForm";

const AddNewBook = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Add New Book</h3>
            <p>Fill the form & submit to add a new Book.</p>
          </div>
          <BookForm />
        </div>
      </div>
    </>
  );
};

export default AddNewBook;
