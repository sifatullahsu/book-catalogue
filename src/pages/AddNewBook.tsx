const AddNewBook = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Add New Book</h3>
            <p>Fill the form & submit to add a new Book.</p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              name="book_name"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              name="auhtor"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              name="auhtor"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select name="genre" className="select select-sm select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Summery</span>
            </label>
            <textarea
              name="summery"
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>

          <button className="btn btn-primary btn-sm text-xs px-16 mt-5">
            Add New Book
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewBook;
