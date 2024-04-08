import React from "react";
import { Link  } from "react-router-dom"; //redirect

const PageNotFound = () => {
  // const handleRedirect = () => {
  //   window.location.href = "/";
  // };

  return (
    <div className="container flex justify-center items-center mx-auto">
      <div className="">
      <img
        src="https://img.freepik.com/premium-photo/flat-concept-404-error-page-file-found-web-page-banner-presentation-social-media-documents-website-maintenance-error-webpage-construction-vector-ultraviolet-illustration_317038-260.jpg"
        alt=""
      />
      {/* </div>
      <div> */}
        <button
          // onClick={handleRedirect}
          className="flex justify-center items-center mx-auto border rounded-md border-violet-500 p-2 hover:text-violet-700"
        >
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
