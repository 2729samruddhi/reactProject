import React from "react";

export default function Contact() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-75 bg-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row g-0 overflow-hidden">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="p-4 p-md-5 bg-light rounded-3 h-100">
                  <h1 className="display-6 fw-bold">
                    Get in touch:
                  </h1>
                  <p className="fs-5 text-secondary mb-4">
                    Fill in the form to start a conversation
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded-circle" style={{ width: "36px", height: "36px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="text-secondary"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ms-3 fw-semibold">
                      Acme Inc, Street, State, Postal Code
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded-circle" style={{ width: "36px", height: "36px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="text-secondary"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ms-3 fw-semibold">
                      +44 1234567890
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded-circle" style={{ width: "36px", height: "36px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="text-secondary"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ms-3 fw-semibold">
                      info@acme.org
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <form className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
                  <div className="mb-3">
                    <label htmlFor="name" className="visually-hidden">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="visually-hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tel" className="visually-hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg px-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}