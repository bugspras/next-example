import Image from "next/image";

export default function Main() {
  return (
    <>
      <title>My page title</title>
      <main className="bg-white">
        <div className="wrapper">
          <div className="">
            <div className="row g-0 m-0">
              <div className="col-xl-6 col-lg-12">
                <div className="position-fixed top-0 h-100 d-xl-block d-none login-cover-img"></div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="login-cover-wrapper">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="text-left">
                        <h4>Welcome Back !</h4>
                        <p>Sign In to continue</p>
                      </div>
                      <form
                        action="#"
                        method="post"
                        className="form-body row g-3"
                      >
                        <div className="col-12">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                          />
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckRemember"
                            />
                            <label className="form-check-label">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 text-end">
                          <a href="authentication-reset-password-cover.html">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="col-12 col-lg-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              Sign In
                            </button>
                          </div>
                        </div>
                        <div className="col-12 col-lg-12 text-center">
                          <p className="mb-0">
                            Dont have an account?{" "}
                            <a href="registrasi">Sign up</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
