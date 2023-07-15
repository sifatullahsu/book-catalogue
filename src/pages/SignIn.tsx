const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 md:p-8 lg:p-16">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">SignIn</h3>
            <p>Login to your account.</p>
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
          <button className="btn btn-primary btn-sm text-xs px-16 mt-5">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
