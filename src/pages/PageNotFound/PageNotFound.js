import React from "react";
import LinkButton from "components/LinkButton";
import "pages/PageNotFound/style.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-title">Ooops! Error Page</div>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container" />
      <LinkButton link="/home">Home</LinkButton>
    </div>
  );
};

export default PageNotFound;
