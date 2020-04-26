import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-info py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
            Copyright &copy; CoolWebsiteName {new Date().getFullYear()}
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-twitter"></i>t
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>f
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-linkedin-in"></i>in
            </a>
          </div>
          <div className="col-lg-4 text-lg-right">
            <a className="mr-3" href="#!">
              Privacy Policy
            </a>
            <a href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
