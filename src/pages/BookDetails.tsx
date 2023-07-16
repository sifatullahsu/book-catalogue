import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { HiOutlineBookOpen } from "react-icons/hi";

const BookDetails = () => {
  const [isVisitor] = useState(false);

  return (
    <>
      <div className="container relative">
        <div className="p-5 pt-14 md:p-8 lg:p-16">
          <HiOutlineBookOpen className="text-lg"></HiOutlineBookOpen>
          <h2 className="text-lg font-semibold">Shoes!</h2>

          <p className="text-sm">
            By <span className="hover:underline">Shadat Hossain</span>
          </p>

          <div className="text-sm font-medium my-5">
            <p>Genre: Fiction</p>
            <p>Publication Date: 25-02-2023</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              fugiat repellendus magni, repudiandae incidunt earum, error sunt
              sapiente maiores facere quibusdam perspiciatis voluptatibus
              architecto aliquid vitae sint maxime. Cum necessitatibus, quis
              quam incidunt aperiam odio impedit praesentium quaerat voluptatem
              aut velit, beatae, provident ad corporis animi soluta fugiat
              accusantium minus illum totam. Sequi nostrum possimus temporibus
              doloremque quibusdam amet optio quas ipsam delectus dolorum
              distinctio veritatis rerum voluptate labore, itaque nesciunt!
              Sequi, minima provident eos incidunt maiores velit et itaque.
            </p>
          </div>
          <div className="space-x-1 absolute top-10 right-5">
            <button
              disabled={true}
              className="btn btn-sm btn-ghost px-1 text-2xl "
            >
              <BiEdit />
            </button>
            <button
              disabled={true}
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
                disabled={isVisitor}
              ></textarea>
              <button
                disabled={isVisitor}
                className="btn btn-primary btn-sm w-full text-xs"
              >
                Submit Comment
              </button>
              {isVisitor && (
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
