const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">SignUp</h3>
            <p>Register a new account.</p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm_password"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-primary btn-sm text-xs px-16 mt-5">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
