import React from "react";
import "./index.scss";
import { Button } from "reactstrap";

const Podcast = () => {
  return (
    <section className="container podcast">
      <div className="num-episode">01.</div>
      <div className="podcast-text">
        <span>episode #1</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          doloribus.
        </p>
      </div>
      <div className="guest">
        <img src="" alt="" />
        <h3>
          Guest <span>Grzegorz Rog from Edweb</span>
        </h3>
      </div>
      <Button>Listen on soundCloud</Button>
      <a href="#">or jump to iTunes</a>
    </section>
  );
};
export default Podcast;
