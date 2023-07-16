import { ChangeEvent } from "react";
import { iBook } from "../types/globalTypes";

type iProps = {
  data?: iBook;
  handler: (event: ChangeEvent<HTMLFormElement>) => void;
};

const BookForm = ({ data, handler }: iProps) => {
  return (
    <form onSubmit={handler}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Book Name</span>
        </label>
        <input
          type="text"
          name="book_name"
          defaultValue={data?.name}
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Author</span>
        </label>
        <input
          type="text"
          name="author"
          defaultValue={data?.author}
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Publication Date</span>
        </label>
        <input
          type="date"
          name="publication_date"
          defaultValue="2023-07-12"
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Genre</span>
        </label>
        <select
          name="genre"
          className="select select-sm select-bordered"
          defaultValue={data ? data.genre : "Pick one"}
        >
          <option disabled>Pick one</option>
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
          defaultValue={data?.summery}
          className="textarea textarea-bordered h-24"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-sm text-xs px-16 mt-5"
      >
        {data ? "Update Book" : "Add New Book"}
      </button>
    </form>
  );
};

export default BookForm;
