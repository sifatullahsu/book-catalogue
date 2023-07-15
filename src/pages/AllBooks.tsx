import BookGrid from "../components/BookGrid";

const AllBooks = () => {
  return (
    <>
      <div className="container">
        <div className="py-16">
          <div className="text-center pb-8">
            <h2 className="text-xl font-semibold">All Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <BookGrid />
            <BookGrid />
            <BookGrid />
            <BookGrid />
            <BookGrid />
            <BookGrid />
            <BookGrid />
            <BookGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
