import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Main() {
  const router = useRouter();

  const [registrasi, setRegistrasi] = useState({
    email: "",
    username: "",
    photo: "",
    fullname: "",
    password: "",
  });
  const [image, setImage] = useState(null);

  const [createObjectURL, setCreateObjectURL] = useState(null);

  const openImg = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setRegistrasi({ ...registrasi, ["photo"]: i.name });
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const body = new FormData();
    body.append("file", image);
    let { statusText, data } = await axios.post(
      `http://localhost:3000/api/registrasi/upload`,
      body
    );
    if (statusText == "OK") {
      let { status } = data;
      if (status) {
        let { data } = await axios.post(
          `http://localhost:3000/api/registrasi`,
          registrasi
        );
        setRegistrasi({
          email: "",
          username: "",
          photo: "",
          fullname: "",
          password: "",
        });
      }
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setRegistrasi({ ...registrasi, [e.target.name]: value });
  };
  return (
    <>
    <title>My page title</title>
      <main>
        <div className="login-bg-overlay au-sign-in-basic"></div>
        <div className="wrapper">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
              <div className="container-fluid">
                <a href="#">
                  <h5>Happy Code</h5>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-7 mx-auto mt-5">
                <div className="card radius-10">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h4>Create New Account</h4>
                      <p>Get your free account now</p>
                    </div>
                    <form onSubmit={onSubmit} className="form-body row g-3">
                      <div className="col-12 col-lg-12">
                        <div className="position-relative border-bottom my-3">
                          <div className="position-absolute seperator-2 translate-middle-y"></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="abc@example.com"
                          onChange={handleChange}
                          value={registrasi.email}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="abc"
                          onChange={handleChange}
                          value={registrasi.username}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Photo</label>
                        <input
                          type="file"
                          className="form-control"
                          name="photo"
                          onChange={openImg}
                          placeholder="png, jpg"
                          required
                        />
                        {registrasi.photo && (
                          <Image
                            src={createObjectURL}
                            alt=""
                            height={100}
                            width={120}
                            layout="responsive"
                          />
                        )}
                        {/* <Image src={createObjectURL} width={100} height={120} alt="img" /> */}
                      </div>
                      <div className="col-12">
                        <label className="form-label">FullName</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          placeholder="abc example"
                          onChange={handleChange}
                          value={registrasi.fullname}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Your password"
                          onChange={handleChange}
                          value={registrasi.password}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-12">
                        <div className="form-check">
                          <label className="form-check-label">
                            by registering you agree to the{" "}
                            <a href="#">
                              <u>Terms of Use</u>
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-lg-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Sign In
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-lg-12">
                        <div className="social-login d-flex flex-row align-items-center justify-content-center gap-2 my-2">
                          <a href="https://id-id.facebook.com/" target="_blank">
                            <Image
                              src="/facebook.png"
                              width={50}
                              height={50}
                              alt="google"
                            />
                          </a>
                          <a
                            href="https://www.google.com/?hl=ID"
                            target="_blank"
                          >
                            <Image
                              src="/google.png"
                              width={50}
                              height={50}
                              alt="facebook"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-lg-12 text-center">
                        <p className="mb-0">
                          Dont have an account?{" "}
                          <a href="login">
                            <u>Sign up</u>
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="my-5">
            <div className="container">
              <div className="text-center">
                <p className="my-4">© 2023 Created with love by me .</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
